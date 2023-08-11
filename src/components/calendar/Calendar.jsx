import { useSearchParams } from 'react-router-dom'

import { DayView } from './DayView/DayView'
import { MonthView } from './MonthView/MonthView'

export const Calendar = ({ toggleEventForm }) => {
    const [searchParams] = useSearchParams()
    const date = searchParams.get("date")

    // There are 3 cases to consider:

    // 1. No date provided
    if (date === null) {
        return <DayView toggleEventForm={toggleEventForm} />
    }

    const [from, to ] = date.split("to")

    // 2. from/to dates provided
    if (to) {
        return <MonthView from={from} to={to} />
    }

    // 3. single date provided
    return <DayView date={date} toggleEventForm={toggleEventForm} />
}