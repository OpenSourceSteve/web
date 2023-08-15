import { forwardRef, useEffect, useState } from "react"

import { Button, TextInput } from "../../../components"

import {
    useCreateCaseMutation,
    useCreateCaseClientMutation,
    useUpdateCaseMutation
} from "../casesSlice"

import { ClientSelector } from "../../clients/ClientSelector"
import { ClientName } from "../../clients/ClientName"

import { caseAttributes } from "./caseAttributes"

import { trimAndDecreaseCase } from "../../../utils"

export const CaseForm = forwardRef(({ caseInstance, onCancel, clientId }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);
    const [debounced, setDebounced] = useState(false);

    const initialState = {
        jurisdiction: "",
        court: "",
        judge: "",
        prosecutor: "",
        caseNumber: "",
        caseName: "",
        clientName: "",
        clientId: ""
    }

    const [caseDetails, setCaseDetails] = useState(initialState)

    useEffect(() => {
        if (caseInstance) {
            setCaseDetails(caseInstance)
        } else {
            setCaseDetails({
                ...caseDetails,
                clientId
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [caseInstance])

    const [createCase] = useCreateCaseMutation()
    const [createCaseClient] = useCreateCaseClientMutation()
    const [updateCase] = useUpdateCaseMutation()

    const changeHandler = ({ target }) => {
        const { name, value } = target;
        setCaseDetails({
            ...caseDetails,
            [name]: value
        })
    }

    const submitHandler = async () => {
        setIsLoading(true)
        const clientId = caseDetails.clientId;
        const caseData = {}
        caseAttributes.forEach(attribute => {
            caseData[attribute] = caseDetails[attribute];
        })

        const fieldsToTrimAndDecreaseCase = ["court", "judge", "jurisdiction", "prosecutor"]
        trimAndDecreaseCase(caseData, fieldsToTrimAndDecreaseCase)

        if (caseInstance) {
            await updateCase({ input: caseData }).unwrap()
            closeHandler()
        } else {
            const { id: caseId } = await createCase({ input: caseData }).unwrap()
            await createCaseClient({ input: { caseId, clientId } })
            // TODO: createCaseLawyer (or don't? - this is not a 'right now' issue)
            closeHandler()
        }
    }

    const closeHandler = () => {
        onCancel(ref)
        if (caseInstance) {
            setCaseDetails(caseInstance)
        } else {
            setCaseDetails(initialState)
        }
        setIsLoading(false)
    }

    const clientNameChangeHandler = ({ target }) => {
        setCaseDetails({
            ...caseDetails,
            clientName: target.value
        })
        clearTimeout(timeoutId)
        setDebounced(false)
        setTimeoutId(setTimeout(() => {
            setDebounced(true)
        }, 600))
    }

    const clientHandler = client => {
        setCaseDetails({
            ...caseDetails,
            clientId: client.id
        })
    }

    return (
        <dialog ref={ref} className="w-96 p-4 rounded-lg border border-black">
            <h2 className="inline">{caseInstance ? "Update" : "Create"} Case Form</h2><span onClick={closeHandler} className="float-right cursor-pointer">X</span>
            <form className="">
                {!caseInstance && (caseDetails.clientId === ""
                    ? <ClientSelector clientName={caseDetails.clientName}
                        clientNameChangeHandler={clientNameChangeHandler}
                        clientHandler={clientHandler}
                        debounced={debounced}
                    />
                    : (caseDetails?.clientId && <ClientName clientId={caseDetails.clientId} />)
                )}
                <div className="py-2">
                    <TextInput name={"jurisdiction"} label={"Jurisdiction"} state={caseDetails} changeHandler={changeHandler} />
                </div>
                <div className="py-2">
                    <TextInput name={"court"} label={"Court"} state={caseDetails} changeHandler={changeHandler} />
                </div>
                <div className="py-2">
                    <TextInput name={"judge"} label={"Judge"} state={caseDetails} changeHandler={changeHandler} />
                </div>
                <div className="py-2">
                    <TextInput name={"prosecutor"} label={"Prosecutor"} state={caseDetails} changeHandler={changeHandler} />
                </div>
                <div className="py-2">
                    <TextInput name={"caseNumber"} label={"Case Number"} state={caseDetails} changeHandler={changeHandler} />
                </div>
                <div className="pt-2 pb-8">
                    <TextInput name={"caseName"} label={"Case Name"} state={caseDetails} changeHandler={changeHandler} />
                </div>

                <div>
                    <Button isLoading={isLoading}>
                        <button type="button"
                            className={`
                                px-4 py-2
                                rounded
                                bg-blue-500 hover:bg-blue-400
                                text-white font-semibold text-center
                                focus:outline-none
                                focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                                cursor-pointer
                            `}
                            onClick={submitHandler}
                        >Submit</button>
                        <button type="button"
                            className={`
                                px-4 py-2
                                rounded
                                bg-white
                                text-black font-semibold text-center
                                focus:outline-none
                                focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                                cursor-pointer
                            `}
                            onClick={closeHandler}>Cancel</button>
                    </Button>
                </div>
            </form>
        </dialog>
    )
})