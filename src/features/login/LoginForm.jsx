import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Auth } from 'aws-amplify';

import { Button, EmailInput, PasswordInput } from '../../components'

import { logger } from '../../utils/logger';

export const LoginForm = ({ onReset }) => {
    const Logger = logger();

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const changeHandler = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const signinHandler = async () => {
        const { email, password } = state;
        if (email !== "" && password !== "") {
            setIsLoading(true)
            try {
                await Auth.signIn(email, password);
                setIsLoading(false)
                navigate("/docket");
            } catch (error) {
                Logger.error("Sign in", error)
                const errorMessage = error.message
                setState({
                    ...state,
                    error: { submit: errorMessage }
                })
                setIsLoading(false)
            }
        } else {
            if (email === "" && password === "") {
                setState({
                    ...state,
                    error: { email: "Please enter email address", password: "Please enter password" }
                })
            } else if (email === "") {
                setState({
                    ...state,
                    error: { email: "Please enter email address", password: undefined }
                })
            } else if (password === "") {
                setState({
                    ...state,
                    error: { email: undefined, password: "Please enter password" }
                })
            } else { setState({ ...state, error: { email: state.error.email, password: undefined } }) }
        }
    }

    const resetPasswordHandler = event => {
        event.preventDefault()
        navigate('/reset-password')
    }
    return (
        <form className="w-96 border border-black rounded-lg px-8 pt-8">
            <div className="">
                <EmailInput name="email" label="Email address" state={state} changeHandler={changeHandler} />
            </div>
            <div className="mt-4">
                <PasswordInput name="password" label="Password" state={state} changeHandler={changeHandler} />
            </div>
            <Button isLoading={isLoading}>
                <button type="button"
                    onClick={signinHandler}
                    className={`
                            mt-10 px-4 py-2
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            block w-full
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}>Sign in</button>
            </Button>
            <div className="text-red-500 font-bold mt-4 text-center">{state.error?.["submit"]}</div>
            <a href="/reset-password" onClick={resetPasswordHandler} className={`my-4 block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 self-center`}>Reset Password</a>
        </form>
    )
}