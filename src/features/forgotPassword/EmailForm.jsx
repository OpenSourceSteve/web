import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Auth } from 'aws-amplify'

import { Button, EmailInput } from "../../components"

import { logger } from '../../utils';

export const EmailForm = ({ onSuccess, onChange, state, onBack }) => {
    const Logger = logger();
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async () => {
        setIsLoading(true)
        try {
            await Auth.forgotPassword(state.email);
            setIsLoading(false)
            onSuccess()
        } catch (error) {
            Logger.error("Auth.forgotPassword", error)
            setIsLoading(false)
        }
    }

    const backHandler = event => {
        event.preventDefault()
        navigate("/login")
    }

    return (
        <form className="w-96 border border-black rounded-lg p-8">
            <div className="mb-4">Please enter your email address in the field below.</div>
            <div>If there is an account associated with your email address, we will email you a password confirmation code.</div>
            <div className="mt-8" >
            <EmailInput name="email" label="Email" changeHandler={onChange} state={state} />
            </div>
            <div>
                <Button isLoading={isLoading}>
                    <div className="w-full flex justify-between mt-8">
                        <button type="button"
                            className={`
                                px-4 py-2
                                rounded
                                bg-blue-500 hover:bg-blue-400
                                text-white font-semibold text-center
                                focus:outline-none
                                focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                                cursor-pointer
                            `}
                            onClick={submitHandler}>Submit</button>
                        <a href="/login" onClick={backHandler} className={`
                            my-4
                            text-sm
                            text-center
                            font-medium
                            text-blue-600
                            hover:underline
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            self-center
                        `}>Return to login</a>
                    </div>
                </Button>
            </div>
        </form>
    )
}