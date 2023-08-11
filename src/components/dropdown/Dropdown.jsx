import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { Link } from "../link";

// import styles from "./Dropdown.module.css"

export const Dropdown = ({ title, signOut }) => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const keydownHandler = ({ target, keyCode }) => {
        if (keyCode === 13) {
            if (target.id === "account") {
                setShow(!show)
            }
            else {
                navigate(`/${target.dataset['href']}`)
            }
        }
    }

    const offclick = ({ target }) => {
        if (target.id !== "account") {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", offclick)
    })

    const toggleShow = () => {
        setShow(!show)
    }

    const links = ["profile", "settings", "logout"]

    return (
        <div className="flex flex-col">
            <div tabIndex={0}
                 onKeyDown={keydownHandler}
                 id="account"
                 className="capitalize cursor-pointer text-white"
                 onClick={toggleShow}
            >{title}</div>
            {show && (
                <nav className="absolute z-10 top-8 bg-white mt-2 rounded px-2 border border-black">
                    <ul className="">
                    {links.map(link => {
                        if (link === "logout") {
                            return (
                                <li key={link} tabIndex={0} data-href={link} onKeyDown={keydownHandler}>
                                    <button type="button" onClick={() => signOut() && navigate("/login") }>Logout</button>
                                </li>
                            )
                        } else {
                            return (
                                <li key={link} tabIndex={0} data-href={link} onKeyDown={keydownHandler}>
                                    <Link path={`/${link}`} text={link} color="black"/>
                                </li>
                            )
                        }
                        })}
                    </ul>
                </nav>
            )}
        </div>
    )
}