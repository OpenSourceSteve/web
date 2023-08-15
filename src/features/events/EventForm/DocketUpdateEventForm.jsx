import { forwardRef, useEffect, useState } from 'react'

import {
    useGetEventQuery,
    useUpdateEventMutation
} from "../eventsSlice"

import { formatDatetimeWithTimezone, logger } from '../../../utils'

import { eventTypeOptions } from "../eventTypeOptions"

import {
    Button,
    DatetimeInput,
    NumberInput,
    SelectInput,
    TextInput,
    UrlInput
} from '../../../components'

import { eventAttributes } from './eventAttributes'

export const DocketUpdateEventForm = forwardRef(({ caseID, onToggleForm, eventId }, ref) => {
    const Logger = logger()

    const initialState = {
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

    const [isLoading, setIsLoading] = useState(false)

    const { data: event, isLoading: isEventLoading, isSuccess, isError, error } = useGetEventQuery({ id: eventId })

    useEffect(() => {
        if (event) {
            setEventState(event)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess, event])

    const [updateEvent, { isError: isUpdateError, error: updateError }] = useUpdateEventMutation()

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target
        setEventState({
            ...eventState,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const eventTypeOptionsArray = eventTypeOptions.reduce((prev, curr, currIndex) => {
        const { label, value } = curr
        prev.push({ label, value })
        return prev
    }, [])

    const setError = (error, verb) => {
        // const message = error.message.split(":")[0]
        const { message } = error
        setEventState({
            ...eventState,
            error: { submit: message }
        })
        Logger.error(`${verb} event`, error);
    }

    const submitAndReset = async () => {
        setIsLoading(true)

        const eventObj = {}

        eventAttributes.forEach(attribute => {
            eventObj[attribute] = eventState[attribute]
        })

        eventObj.caseID = caseID
        eventObj.id = eventState.id
        eventObj.link = eventObj.link || undefined
        eventObj.startDatetime = formatDatetimeWithTimezone(eventObj.startDatetime)

        try {
            await updateEvent({ input: eventObj }).unwrap()
            closeHandler()
        } catch (error) {
            setError(error, "updating")
        }
    }

    const closeHandler = () => {
        onToggleForm()
        setIsLoading(false)
        setEventState(initialState)
    }

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">{event ? "Update" : "Create"} New Event</div>
                <button className="" onClick={closeHandler}>X</button>
            </div>
            <form method="dialog">
                <div className="mb-8">
                    <SelectInput name="type" label="Event Type" state={eventState} changeHandler={changeHandler} options={eventTypeOptionsArray} defaultOption={{ label: "Please choose event type", value: "" }} />
                </div>
                <div className="mb-4">
                    <DatetimeInput name="startDatetime" label="Date and Time" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="title" label="Title" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="description" label="Description" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <NumberInput name="duration" label="Duration (minutes)" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="location" label="Location" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <UrlInput name="link" label="Link" state={eventState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="phone" label="Phone" state={eventState} changeHandler={changeHandler} />
                </div>
            </form>
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
                    onClick={submitAndReset}
                >Submit</button>
                <button type="button"
                    className="mt-4 px-4 py-2"
                    onClick={closeHandler} >Cancel</button>
            </Button>
            <div className="text-red-500 font-bold">{eventState.error?.submit}</div>
        </dialog>
    )
})