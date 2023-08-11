import { useNavigate } from "react-router-dom"

export const ConfirmationMessage = () => {
    const navigate = useNavigate()

    const loginHandler = event => {
        event.preventDefault()
        navigate("/login")
    }
    return (
        <div className="w-96">
            You're account has been confirmed. Please go to the <a onClick={loginHandler} href="/login">login page</a>.
        </div>
    )
}