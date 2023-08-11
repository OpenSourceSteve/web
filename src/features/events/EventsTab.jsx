import { useSearchParams } from "react-router-dom"

import { EventsList } from "./EventsList/EventsList"
import { EventDetails } from "./EventDetails/EventDetails"

export const EventsTab = ({ dialogRef }) => {
    const [searchParams] = useSearchParams()
    const eventId = searchParams.get("event")

    if (eventId) {
        return <EventDetails eventId={eventId} />
    }
    return <EventsList dialogRef={dialogRef} />
}