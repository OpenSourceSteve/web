import { useNavigate, useParams } from "react-router-dom";

import { useListEventsQuery } from '../eventsSlice';

import { UpdateEventForm } from '../EventForm/UpdateEventForm'

import { EventsEmptyState } from "./EventsEmptyState"

import { eventTypeMap } from "../eventTypeMap";

import { ListTab } from "../../../components/tab/ListTab";

export const EventsList = ({ dialogRef }) => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListEventsQuery({})

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            const eventId = event.target.dataset['eventId']
            navigate(`/cases/${caseId}?event=${eventId}`)
        }
    }

    const clickHandler = async event => {
        event.preventDefault()
        const eventId = event.target.parentElement.dataset['eventId']
        navigate(`?event=${eventId}`)
    }

    const headers = ["Event Type", "Date", "Time", "Duration (minutes)", "Title"]

    const listHeaders = headers.map(header => <div className="basis-1/5" key={header}>{header}</div>)

    let listRows

    if (isSuccess) {
        listRows = events.map(event => {
            const startDatetime = new Date(event.startDatetime)
            const startDate = startDatetime.toLocaleDateString()
            const startTime = startDatetime.toLocaleTimeString()
            const adjustedStartTime = startTime.split(":")[0] + ":" + startTime.split(":")[1] + " " + startTime.split(" ")[1]
            return (
                <div key={event.id}
                    tabIndex={0}
                    className="hover:bg-slate-100 py-2"
                    data-event-id={event.id}
                    onKeyDown={e => keyDownHandler(e, event.id)}
                >
                    <a className="flex"
                        // onKeyDown={e => keyDownHandler(e, event)}
                        data-event-id={event.id}
                        onClick={clickHandler}
                        href={`/cases/${caseId}?view=/events/${event.id}`}
                    >
                        <div className="basis-1/5">{eventTypeMap[event.type] || ""}</div>
                        <div className="basis-1/5">{startDate}</div>
                        <div className="basis-1/5">{adjustedStartTime}</div>
                        <div className="basis-1/5">{event.duration || ""}</div>
                        <div className="basis-1/5">{event.title || ""}</div>
                    </a>
                </div>
            )
        })
    }

    return (
        <ListTab
            dialogRef={dialogRef}
            listHeaderClassName="flex border-b border-black"
            listHeaders={listHeaders}
            listBodyClassName=""
            listRows={listRows}
            ResourceForm={UpdateEventForm}
            ResourceEmptyState={EventsEmptyState} />
    )
}