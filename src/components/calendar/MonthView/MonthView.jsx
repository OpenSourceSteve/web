import { useListEventsQuery } from '../../../features/events/eventsSlice'

import { MonthCalendar } from './MonthCalendar'

export const MonthView = ({ from, to }) => {
    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListEventsQuery({ filter: { startDatetime: { between: [from, to] } } })

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    } else if (isSuccess) {
        return (
            <div className="w-full h-full px-8 pb-40">
                <div className="flex justify-center">
                    <h1 className="font-bold p-4">Monthly View</h1>
                </div>
                <MonthCalendar from={from} events={events} />
            </div>
        )
    } else if (isError) {
        return (
            <>
                <div>There was an error loading your Docket.</div>
                <div>{JSON.stringify(error)}</div>
            </>
        )
    } else {
        return null
    }
}