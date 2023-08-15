import { forwardRef, useRef, useState } from 'react'

import { useCreateEventMutation } from "../eventsSlice"

import { formatDatetimeWithTimezone } from '../../../utils'

import { ClientName, ClientSelector } from '../../clients'
import { CaseNumberName, CaseSelector } from '../../cases'

import { eventTypeOptions } from '..'
import {
    Button,
    DatetimeInput,
    NumberInput,
    PhoneInput,
    SelectInput,
    TextInput,
    UrlInput
} from '../../../components'

export const DocketCreateEventForm = forwardRef(({ onCancel }, ref) => {
    const timeoutRef = useRef(0)
    const debounced = useRef(false)

    const [createEvent, { isError: isCreateError }] = useCreateEventMutation()

    const initialState = {
        client: "",
        clientName: "",
        caseInstance: "",
        startDatetime: "",
        title: "",
        description: "",
        duration: "",
        location: "",
        link: "",
        phone: "",
        type: ""
    }

    const [eventState, setEventState] = useState(initialState)

    const submitAndReset = () => {
        if (caseInstance === "") {
            setEventState({
                ...eventState,
                error: {submit: "Events must have a case."}
            })
            return
        }
        onCancel()
        const eventObj = {}
        const eventAttributes = ["caseID", "type", "startDatetime", "duration", "location", "link", "phone", "title", "description"]
        eventAttributes.forEach(attr => {
            eventObj[attr] = eventState[attr]
        })
        eventObj.caseID = eventState.caseInstance.id
        eventObj.duration = eventObj.duration || 0
        eventObj.link = eventObj.link || undefined
        eventObj.startDatetime = formatDatetimeWithTimezone(eventObj.startDatetime)
        createEvent({ input: eventObj })
        setEventState(initialState)
    }

    const changeHandler = ({ target }) => {
        const { name, value } = target
        setEventState({
            ...eventState,
            [name]: value
        })
        if (name === "clientName") {
            clearTimeout(timeoutRef)
            debounced.current = false
            timeoutRef.current = setTimeout(() => {
                debounced.current = true
            }, 600)
        }
    }

    const clientHandler = client => {
        setEventState({
            ...eventState,
            client,
            clientName: client.firstName + " " + client.lastName
        })
    }

    const caseHandler = (caseInstance) => {
        setEventState({
            ...eventState,
            caseInstance
        })
    }

    const closeHandler = () => {
        onCancel()
        setEventState(initialState)
    }

    const { client, clientName, caseInstance, caseName } = eventState;

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">Create New Event</div>
                <button className="" onClick={closeHandler}>X</button>
            </div>
            <form method="dialog">
                <div className="pb-8">
                    {client.id ? <ClientName clientId={client.id} /> : (
                        <ClientSelector
                            clientId={client?.id}
                            clientName={clientName}
                            clientNameChangeHandler={changeHandler}
                            clientHandler={clientHandler}
                            debounced={debounced}
                        />
                    )}
                </div>
                {caseInstance && <div className="pb-8"><CaseNumberName caseInstance={caseInstance} /></div>}
                {(!caseInstance && client.id) && (
                    <div className="pb-8">
                        <CaseSelector clientCases={client.cases?.items}
                            caseInstance={caseInstance}
                            caseName={caseName}
                            caseHandler={caseHandler}
                        />
                    </div>
                )}

                {caseInstance && (
                    <>
                        <div className="pb-8">
                            <SelectInput name="type" label="Event Type" state={eventState} changeHandler={changeHandler} options={eventTypeOptions} defaultOption={{ key: "default", value: "" }} />
                        </div>
                        <div className="pb-8">
                            <DatetimeInput name="startDatetime" label="Date and Time" changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <TextInput name="title" label="Title" changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <TextInput name="description" label="Description" changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <NumberInput name="duration" label="Duration (minutes)" changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <TextInput name={"location"} label={"Location"} changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <UrlInput name="link" label="Link" changeHandler={changeHandler} state={eventState} />
                        </div>
                        <div className="pb-8">
                            <PhoneInput name="phone" label="Phone" changeHandler={changeHandler} state={eventState} />
                        </div>
                    </>
                )}
            </form>
            <Button>
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
                    onClick={submitAndReset} >Add Event</button>
                <button type="button"
                    className="mt-4 px-4 py-2"
                    onClick={closeHandler} >Cancel</button>
            </Button>
            <div className="flex justify-center pt-4">
            <div className="text-red-500">{eventState.error?.["submit"]}</div>
            </div>
        </dialog>
    )
})