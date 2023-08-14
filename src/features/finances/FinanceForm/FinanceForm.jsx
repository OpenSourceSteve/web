import { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {
    useCreateFinanceMutation,
    useUpdateFinanceMutation
} from "../financesSlice"

import {
    Button,
    NumberInput,
    SelectInput,
    TextInput
} from '../../../components'

import { logger } from '../../../utils/logger'

// TODO: I don't think eventID and are passed in
export const FinanceForm = forwardRef(({ caseID, onToggleForm, eventID, resource: finance }, ref) => {
    const Logger = logger()

    const clientId = useSelector(state => state.clients.clientId)

    const initialState = {
        type: "",
        title: "",
        description: "",
        amount: ""
    }

    const [financeState, setFinanceState] = useState(initialState)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (finance) {
            setFinanceState(finance)
        } else {
            setFinanceState({
                ...financeState,
                clientId,
                caseID,
                eventID
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [finance, clientId, caseID])

    const [createFinance, { isError: isCreateError, error: createError }] = useCreateFinanceMutation()
    const [updateFinance, { isError: isUpdateError, error: updateError }] = useUpdateFinanceMutation()

    const changeHandler = ({ target }) => {
        const { name, value } = target
        setFinanceState({
            ...financeState,
            [name]: value
        })
    }

    const setError = (error, verb) => {
        // const message = error.message.split(":")[0]
        const { message } = error
        setFinanceState({
            ...financeState,
            error: { submit: message }
        })
        Logger.error(`${verb} finance`, error);
    }

    const submitAndReset = async () => {
        setIsLoading(true)
        const financeObj = {}

        financeObj["caseID"] = caseID
        financeObj["clientID"] = clientId

        if (financeState.type === "EXPENSE") {
            financeObj["expense"] = +financeState.amount;
        }

        if (financeState.type === "PAYMENT") {
            financeObj["payment"] = +financeState.amount;
        }

        financeObj["title"] = financeState.title;
        financeObj["description"] = financeState.description;

        if (finance) {
            try {
                await updateFinance({ input: financeObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setFinanceState(initialState)
            } catch (error) {
                setError(error, "updating")
            }
        } else {
            try {
                await createFinance({ input: financeObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setFinanceState(initialState)
            } catch (error) {
                setError(error, "creating")
                setIsLoading(false)
            }
        }
    }

    const closeModal = () => {
        onToggleForm()
        setFinanceState(initialState)
    }

    const financeOptions = [
        { label: "Expense", value: "EXPENSE" },
        { label: "Payment", value: "PAYMENT" }
    ]

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">{finance ? "Update" : "Create"} Finance</div>
                <button className="" onClick={closeModal}>X</button>
            </div>
            <form method="dialog">
                <div className="mb-8">
                    <SelectInput name="type" label="Finance Type" state={financeState} changeHandler={changeHandler} options={financeOptions} defaultOption={{ label: "Please choose finance type", value: "" }} />
                </div>
                <div className="mb-4">
                    <TextInput name="title" label="Title" state={financeState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="description" label="Description" state={financeState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <NumberInput name="amount" label="Amount" state={financeState} changeHandler={changeHandler} />
                </div>
            </form>
            <div className="">
                <div>
                    <Button isLoading={isLoading}>
                        <button type="button"
                            className={`
                            mt-4
                            px-4 py-2
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            block
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}
                            onClick={submitAndReset} >Submit</button>
                        <button type="button"
                            className="mt-4 px-4 py-2"
                            onClick={closeModal} >Cancel</button>
                    </Button>
                    <div className="text-red-500 font-bold">{financeState.error?.submit}</div>
                </div>

            </div>
        </dialog>
    )
})