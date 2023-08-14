import { forwardRef, useEffect, useState } from 'react'

import {
    useCreateChargeMutation,
    useUpdateChargeMutation
} from "../chargesSlice"

import { chargeStatusOptions } from "../chargeStatusOptions"

import {
    Button,
    SelectInput,
    TextInput
} from '../../../components'

import { logger } from '../../../utils'

import styles from '../Charges.module.css'

import { chargeAttributes } from './chargeAttributes'

export const ChargeForm = forwardRef(({ caseID, clientId, onToggleForm, resource: charge }, ref) => {
    const Logger = logger()

    const initialState = {
        caseID: "",
        status: "",
        statute: "",
        description: ""
    }

    const [chargeState, setChargeState] = useState(initialState)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (charge) {
            setChargeState(charge)
        } else {
            setChargeState({
                ...chargeState,
                clientId,
                caseID
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charge, clientId, caseID])

    const [createCharge, { isError: isCreateError, error: createError }] = useCreateChargeMutation()
    const [updateCharge, { isError: isUpdateError, error: updateError }] = useUpdateChargeMutation()

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target
        setChargeState({
            ...chargeState,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const chargeStatusOptionsArray = chargeStatusOptions.reduce((prev, curr, currIndex) => {
        const { label, value } = curr
        prev.push({ label, value })
        return prev
    }, [])

    const setError = (error, verb) => {
        // const message = error.message.split(":")[0]
        const { message } = error
        setChargeState({
            ...chargeState,
            error: { submit: message }
        })
        Logger.error(`${verb} charge`, error);
    }

    const submitAndReset = async () => {
        setIsLoading(true)
        const chargeObj = {}
        chargeAttributes.forEach(attribute => {
            chargeObj[attribute] = chargeState[attribute]
        })

        if (charge) {
            try {
                await updateCharge({ input: chargeObj }).unwrap()
                closeModal()
            } catch (error) {
                setError(error, "updating")
            }
        } else {
            try {
                await createCharge({ input: chargeObj }).unwrap()
                closeModal()
            } catch (error) {
                setError(error, "creating")
            }
        }
    }

    const closeModal = () => {
        onToggleForm()
        setIsLoading(false)
        setChargeState(initialState)
    }

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">{charge ? "Update" : "Create"} Charge</div>
                <button className="" onClick={closeModal}>X</button>
            </div>
            <form method="dialog">
                <div className="mb-8">
                <SelectInput name="status" label="Charge Status" state={chargeState} changeHandler={changeHandler} options={chargeStatusOptionsArray} defaultOption={{ label: "Please choose charge status", value: "" }} />
                </div>
                <div className="mb-4">
                <TextInput name="statute" label="Statute" state={chargeState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                <TextInput name="description" label="Description" state={chargeState} changeHandler={changeHandler} />
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
                    <div className={styles.error}>{chargeState.error?.submit}</div>
                </div>

            </div>
        </dialog>
    )
})