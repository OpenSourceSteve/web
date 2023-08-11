import { hours } from "../../../utils"

export const DayCalendar = ({ date, events, toggleEventForm }) => {
    const hoursEvents = hours.map( _ => [] )

    events.forEach(event => {
        const startDatetime = new Date(event.startDatetime)
        const hour = +startDatetime.toLocaleTimeString([], { hour12: false}).split(":")[0]
        hoursEvents[hour].push(event)
    })

    const clickHandler = ({ target }) => {
        const caseId = target.dataset.caseId
        const eventId = target.dataset.eventId
        toggleEventForm(caseId, eventId)
    }

    return (
        <table className="w-full mb-16">
            <thead className="">
                <tr>
                    <td className="flex justify-center">Docket for {date}</td>
                </tr>
            </thead>
            <tbody className="">
                {hours.map((hour, index) => {
                    // TODO: if today, add current time indicator (e.g. horizontal line)
                    return (
                        <tr key={hour} className="flex justify-center px-4">
                            <td className="w-full h-32 border border-black p-0">
                                <div className="flex">
                                    <div className="p-2">{hour}</div>
                                    <div className="px-2">
                                        {hoursEvents[index].map(event => {
                                            const startTime = event.startDatetime.split("T")[1].slice(0, 5)
                                            const minutes = +startTime.split(":")[1]
                                            const top = 100 * (minutes / 60)
                                            const height = 8 * (event.duration / 60)
                                            const startDatetime = new Date(event.startDatetime)
                                            return (
                                                <div className="border border-black rounded-lg relative p-2 bg-sky-100 cursor-pointer"
                                                     style={{ top: `${top}%`, height: `${height}rem` }}
                                                     key={event.id}
                                                     data-event-id={event.id}
                                                     data-case-id={event.caseID}
                                                     onClick={clickHandler}
                                                >{startDatetime.toLocaleTimeString([], {hour: "numeric", minute: "numeric"})} {event.title}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}