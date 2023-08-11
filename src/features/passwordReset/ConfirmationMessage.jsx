import { useNavigate } from "react-router-dom"

export const ConfirmationMessage = () => {
    const navigate = useNavigate()

    const clickHandler = event => {
        event.preventDefault()
        navigate("/login")
    }
    return (
        <div className="w-96 border border-black rounded-lg px-8">
            <div>Your password has been successfully reset.</div>
            <div>Please <a href="/login" onClick={clickHandler}>login</a>.</div>
        </div>
    )

}