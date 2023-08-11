import { useNavigate } from "react-router-dom"
import { Link } from "../link"

export const Navbar = ({ pages }) => {
    const navigate = useNavigate()

    const keydownHandler = ({ target, keyCode }) => {
        if (keyCode === 13) {
            navigate(`/${target.dataset['href']}`)
        }
    }

    return (
        <nav className="ml-8">
            <ul className="h-14 flex justify-between items-center">
                {pages.map(page => {
                    return (
                        <li key={page} data-href={page} onKeyDown={keydownHandler} className="mr-8 capitalize">
                            <Link path={`/${page}`} text={page} color="white" />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}