import { useState } from "react";
import { TextInput } from "../../../components";

export const CasesListSidebar = ({ cases, onToggleCaseForm }) => {
    const [state, setState] = useState({ caseName: "" })

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target;
        setState({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <ul className="flex flex-col justify-center items-center mt-4">
            <li className="mb-4">
                <button onClick={onToggleCaseForm}
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
                >Create New Case</button>
            </li>
            <li>
                <div className="text-rose-300 py-4">What filters should go here?</div>
            </li>
            {false && cases?.length > 0 && (
                <>
                    <li className="mb-4 self-start">
                        <div className="mb-4 ml-8">Case Types:</div>
                        <ul className="ml-8">
                            <li className="mb-2"><input type='checkbox' className="mr-2" />Open</li>
                            <li className="mb-2"><input type='checkbox' className="mr-2" />Closed</li>
                        </ul>
                    </li>
                    <li className="mb-4">
                        <div className="mb-4">Filter by:</div>
                        <TextInput name={"caseName"} label={"Case Name"} state={state} changeHandler={changeHandler} />
                    </li>
                </>
            )}
        </ul>
    )
}