import { forwardRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import API calls
import {
    useCreateClientMutation,
    useUpdateClientMutation,
} from '../clientsSlice';

import {
    Button,
    CheckboxInput,
    DateInput,
    EmailInput,
    PhoneInput,
    TextInput
} from "../../../components"

import { logger, trimAndDecreaseCase } from '../../../utils';

import { clientAttributes } from './clientAttributes';

export const ClientForm = forwardRef(({ clientData, onCancel }, ref) => {
    const Logger = logger();

    const navigate = useNavigate()

    const isUpdate = !!clientData

    const [createClient] = useCreateClientMutation()
    const [updateClient] = useUpdateClientMutation()

    const initialState = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        referralSource: "",
        createCase: true
    }

    const [client, setClient] = useState(initialState)

    useEffect(() => {
        if (clientData) {
            setClient({
                ...clientData,
                createCase: false
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clientData])

    const [isLoading, setIsLoading] = useState(false)

    const changeHandler = ({ target }) => {
        const { name, value, checked, type } = target;
        if (type === "checkbox") {
            setClient({
                ...client,
                [name]: checked
            })
        } else {
            setClient({
                ...client,
                [name]: value
            })
        }
    }

    const submitHandler = async () => {
        setIsLoading(true);
        if ((client.firstName || client.lastName) && (client.phone || client.email)) {
            const { createCase } = client;
            const clientData = {}
            clientAttributes.forEach(attribute => {
                clientData[attribute] = client[attribute];
            })

            const fieldsToTrimAndDecreaseCase = ["firstName", "lastName"]
            trimAndDecreaseCase(clientData, fieldsToTrimAndDecreaseCase)

            if (clientData.dateOfBirth === "") {
                clientData.dateOfBirth = null
            }

            if (clientData.email === "") {
                clientData.email = null
            }

            try {
                let clientId;
                if (isUpdate) {
                    await updateClient({ input: clientData }).unwrap()
                    setClient(initialState)
                } else {
                    const { id } = await createClient({ input: clientData }).unwrap()
                    setClient(initialState)
                    clientId = id;
                }

                setIsLoading(false);
                onCancel()
                if (createCase) {
                    navigate(`/cases?createFor=${clientId}`)
                }
            } catch (error) {
                Logger.error(`${clientData ? "editing" : "adding"} client`, error)
                const field = error.message.split(" ")[1]
                setClient({
                    ...client,
                    error: { [field]: error.message }
                })
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            if (client.firstName === "" && client.lastName === "") {
                setClient({
                    ...client,
                    error: { firstName: "Client must have at least one name." }
                })
            }
            if (client.phone === "" && client.email === "") {
                setClient({
                    ...client,
                    error: { phone: "Client must have a means of contact - either a phone number or an email address." }
                })
            }
        }
    }

    const cancelHandler = () => {
        setClient(initialState)
        onCancel()
    }

    return (
        <dialog ref={ref} className="w-96 p-4 rounded-lg border border-black">
            <h2 className="inline">{clientData ? "Update" : "Create"} Client Form</h2><span onClick={cancelHandler} className="float-right cursor-pointer">X</span>
            <form className="mt-4">
                <div className="">
                    <TextInput name="firstName" label="First Name" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="lastName" label="Last Name" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-8">
                    <DateInput name="dateOfBirth" label="Date of Birth" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <PhoneInput name="phone" label="Phone Number" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <EmailInput name="email" label="Email address" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="address1" label="Address 1" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="address2" label="Address 2" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="city" label="City" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="state" label="State" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="zip" label="Zip" state={client} changeHandler={changeHandler} />
                </div>
                <div className="mt-4">
                    <TextInput name="referralSource" label="Referral Source" state={client} changeHandler={changeHandler} />
                </div>
                {!clientData && <div className="mt-4"><CheckboxInput name="createCase" label="Create default case" state={client} changeHandler={changeHandler} /></div>}
                <div className="mt-4">
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
                            onClick={cancelHandler}
                        >Cancel</button>
                    </Button>
                </div>
            </form>
        </dialog>
    )
})