import { useNavigate } from "react-router-dom"
import { Link } from "../../../components"

export const CaseDetailsSidebar = ({ callToAction }) => {
    const navigate = useNavigate()

    const keyDownHandler = event => {
        if (event.keyCode === 13) {
            navigate('/cases')
        }
    }

    return (
        <ul className="flex flex-col items-center">
            <li className="mt-8" tabIndex={0} onKeyDown={keyDownHandler}>
                <Link path="/cases" text="back to cases list" color="blue-500" />
            </li>
            <li>
                {callToAction}
            </li>
        </ul>
    )
}