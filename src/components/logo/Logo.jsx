import { useNavigate } from "react-router-dom";

// import styles from './logo.module.css'

export const Logo = () => {
    const navigate = useNavigate()

    const keydownHandler = event => {
        return event.keyCode !== 13 || navigate(event.target.dataset['href']);
    }

    const clickHandler = event => {
        event.preventDefault()
        navigate(event.target.dataset['href'])
    }

    return (
        <a href="/" onClick={clickHandler}>
            <div tabIndex={0}
                className="text-white block"
                onKeyDown={keydownHandler}
                data-href="/"
            >EASYLEGAL_LOGO</div>
        </a>
    )
}