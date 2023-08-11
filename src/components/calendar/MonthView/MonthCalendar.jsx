import { useNavigate } from "react-router-dom";

import { adjustForTimezoneOffset, constructDateString } from "../../../utils";
import { days, months } from "../../../utils"

export const MonthCalendar = ({ from, events }) => {
    const navigate = useNavigate()

    const daysEvents = {}

    const sunday = adjustForTimezoneOffset(new Date(from));
    const today = new Date()

    const monthDays = []

    for (let i = 0; i < 28; i++) {
        const date = new Date(sunday)
        date.setDate(sunday.getDate() + i)
        daysEvents[constructDateString(date)] = []
        monthDays.push(date)
    }

    const clickHandler = ({ target }) => {
        let targetDataset = target.dataset;
        while (!targetDataset.date) {
            target = target.parentElement
            targetDataset = target.dataset
        }
        navigate(`/docket?date=${targetDataset.date}`)
    }

    events.forEach(event => {
        daysEvents[event.startDatetime.split("T")[0]].push(event)
    })

    const weeks = []

    let monthDaysIndex = 0

    for (let week = 0; week < 4; week++) {

        const weekdays = []

        for (let day = 0; day < 7; day++) {
            const isToday = today.toLocaleDateString() === monthDays[monthDaysIndex].toLocaleDateString()

            let calendarDate = monthDays[monthDaysIndex].getDate()

            if (monthDaysIndex === 0 || monthDays[monthDaysIndex].getDate() === 1) {
                calendarDate = months[monthDays[monthDaysIndex].getMonth()] + " " + calendarDate
            }

            const dayEventsArray = daysEvents[constructDateString(monthDays[monthDaysIndex])]

            const dayEvents = dayEventsArray.map((event, index) => (
                <div key={index} className="p-2">{event.title}</div>
            ));

            const className = `w-full h-full flex ${isToday && "border-4 border-sky-300"}`

            weekdays.push(
                <td key={day}
                    className="w-full border border-black cursor-pointer"
                    onClick={clickHandler}
                    data-date={constructDateString(monthDays[monthDaysIndex])}
                >
                    <div className={className}>
                        <div className="p-2">{calendarDate}</div>
                        <div className="">{dayEvents}</div>
                    </div>
                </td>
            )

            monthDaysIndex++
        }

        weeks.push(<tr key={week} className="flex justify-between h-full">{weekdays.map(day => day)}</tr>)
    }
    return (
        <table className="w-full h-full">
            <thead className="" >
                <tr className="flex justify-between">
                    {days.map(day => <td key={day} className="w-full basis-1/7">{day}</td>)}
                </tr>
            </thead>
            <tbody className="flex flex-col h-full border border-black">
                {weeks.map(week => week)}
            </tbody>
        </table>
    )
}