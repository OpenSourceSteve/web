import { useGetEventQuery } from "../eventsSlice"

import { CaseEventForm } from "../EventForm/CaseEventForm"

import { eventTypeMap } from "../eventTypeMap"

import { DetailsTab } from "../../../components"

export const EventDetails = ({ eventId }) => {
    const {
        data: event,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetEventQuery({ id: eventId })

    let content
    let title

    if (isSuccess) {
        content = (
            <>
                <div>
                    Date and Time: {event.startDatetime}
                </div>
                <div>
                    Duration: {event.duration}
                </div>
                <div>
                    Location: {event.location}
                </div>
                <div>
                    Link: {event.link}
                </div>
                <div>
                    Phone: {event.phone}
                </div>
                <div>
                    Description: {event.description}
                </div>
                <div>
                    Notes: {event.Notes.items.map(note => <div>{JSON.stringify(note)}</div>)}
                </div>
            </>
        )
        title = `${eventTypeMap[event.type]}: ${event.title}`
    }

    // return content
    return <DetailsTab resourceName="Event"
        resource={event}
        ResourceForm={CaseEventForm}
        title={title}
        resourceDetailContent={content}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
    />
}