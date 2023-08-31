import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useListEventsQuery } from '../../../features/events/eventsSlice'

import {
    adjustForTimezoneOffset,
    constructBeginString,
    constructDateString,
    constructEndString,
    constructTomorrowString,
    days,
    months
} from "../../../utils"

import { DayCalendar } from "./DayCalendar"

export const DayView = ({ date, toggleEventForm }) => {
    const navigate = useNavigate()

    const today = date ? adjustForTimezoneOffset(new Date(date)) : new Date()
    const todayStr = date || constructDateString(today)
    const tomorrowStr = constructTomorrowString(today)

    // retrieve today's events
    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListEventsQuery({ filter: { startDatetime: { between: [todayStr, tomorrowStr] } } })

    useEffect(() => {
        if (!date && events?.length === 0) {
            const beginStr = constructBeginString(today)
            const endStr = constructEndString(today)
            navigate(`/docket?date=${beginStr}to${endStr}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [events])

    if (isLoading) {
        return (
            <div>Daily Calendar Loading...</div>
        )
    } else if (isSuccess) {
        const date = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`

        return (
            <div className="flex flex-col w-full items-center">
                <div className="flex flex-col items-center">
                    <h2>You have {events.length} events scheduled this day.</h2>
                </div>
                <DayCalendar date={date} events={events} toggleEventForm={toggleEventForm} />
            </div>
        )
    } else if (isError) {
        return (
            <div>There was an error loading your Docket.</div>
        )
    } else {
        return null
    }
}