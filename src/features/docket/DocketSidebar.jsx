import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useListCasesQuery } from '../cases/casesSlice'

import { constructBeginString, constructEndString } from '../../utils'

import { Link, TextInput } from '../../components'

export const DocketSidebar = ({ view = "", views, setView, hasEvents, onToggleEventForm }) => {
    const location = useLocation()

    const {
        data: cases,
        isLoading: isCasesLoading,
        isSuccess: isCasesSuccess,
        isError: isCasesError,
        error: casesError
    } = useListCasesQuery({})

    const [eventTypes, setEventTypes] = useState({
        'court appearances': true,
        'deadlines': true,
        'client appointments': true,
        'other appointments': true,
        'other hours billable': true
    })

    const keydownHandler = event => {
        if (event.keyCode !== 13) {
            return false;
        }

        const view = event.target.value

        setView(view)
    }

    const viewChangeHandler = event => {
        const view = event.target.value
        setView(view)
    }

    const eventsChangeHandler = event => {
        const { name, checked } = event.target
        setEventTypes({
            ...eventTypes,
            [name]: checked
        })
    }

    const today = new Date()

    let newEventButton

    if (isCasesLoading) {
        newEventButton = null
    } else if (isCasesSuccess && cases.length > 0) {
        newEventButton = (
            <li className="">
                <button className={`
                            mt-4 px-4 py-2
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}
                    onClick={onToggleEventForm}
                >Schedule New Event</button>
            </li>
        )
    } else {
        newEventButton = null
    }

    const beginStr = constructBeginString(today)
    const endStr = constructEndString(today)

    const isDayView = location.search.indexOf("to") === -1

    return (
        <ul className="flex flex-col justify-center items-center mt-4">
            {isDayView && <li>
                <Link path={`/docket?date=${beginStr}to${endStr}`} text="back to month view" color="blue-500" />
            </li>}
            {newEventButton}
            <li>
                <div className="text-rose-300 pt-8">What filters should go here?</div>
            </li>
            <li className="py-4 text-slate-300">
                <div className="pb-2">Event Types:</div>
                <ul>
                    {Object.keys(eventTypes).map(type => {
                        // TODO: use checkbox component
                        return (
                            <li key={type}>
                                <input type='checkbox'
                                    className=""
                                    id={type}
                                    name={type}
                                    onChange={eventsChangeHandler}
                                    checked={eventTypes[type]}
                                    disabled
                                />
                                <label htmlFor={type} className="p-2 capitalize">{type}</label>
                            </li>
                        )
                    })}
                </ul>
            </li>
            <li className="text-slate-300">
                <div>Filter by client:</div>
                <TextInput name={"clientName"} label={"Client Name"} state={{}} changeHandler={() => {}} disabled />
            </li>
            {hasEvents && (
                <>
                    <li>
                        <div>View:</div>
                        <div>{views.map(v => (
                            <div key={v}>
                                <input type="radio"
                                    id={v}
                                    onKeyDown={keydownHandler}
                                    onChange={viewChangeHandler}
                                    value={v}
                                    checked={view === v}
                                /><label htmlFor={v}>{v}</label>
                            </div>
                        )
                        )}</div>
                    </li>

                </>
            )}
        </ul>
    )
}