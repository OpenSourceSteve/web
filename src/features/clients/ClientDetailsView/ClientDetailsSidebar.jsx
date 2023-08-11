import { useNavigate } from "react-router-dom"
import { Link } from "../../../components"

export const ClientDetailsSidebar = () => {
    const navigate = useNavigate()

    const keyDownHandler = event => {
        if (event.keyCode === 13) {
            navigate('/clients')
        }
    }

    return (
        <ul className="flex justify-center">
            <li className="mt-8" tabIndex={0} onKeyDown={keyDownHandler}>
                <Link path="/clients" text="back to clients list" color="blue-500" />
            </li>
        </ul>
    )
}