import { useState } from "react"
import { TextInput } from "../../../components"

export const ClientsListSidebar = ({ clients, onToggleForm }) => {
    const [state, setState] = useState({ clientName: "" })

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target;
        setState({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        clients?.length > 0 && (
            <ul className="flex flex-col justify-center items-center mt-4">
                <li className="mt-4">
                    <button onClick={onToggleForm}
                        className={`
                        px-4 py-2
                        rounded
                        bg-blue-500 hover:bg-blue-400
                        text-white font-semibold text-center
                        block
                        focus:outline-none
                        focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                        cursor-pointer
                    `}
                    >Add New Client</button>
                </li>
                <li>
                    <div className="text-rose-300 pt-8">What filters should go here?</div>
                </li>
                <li className="mt-8 text-slate-300">
                    <div className="mb-2">Filter by:</div>
                    <TextInput name={"clientName"} label={"Client Name"} state={state} changeHandler={changeHandler} disabled={true} />
                </li>
            </ul>
        )
    )
}