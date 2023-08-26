import { useState } from 'react'
import { Auth } from 'aws-amplify'

import { Button, EmailInput, PasswordInput, TextInput } from "../../components"
import { createPostJsonOptions, getEnv, logger } from "../../utils";

import { useNavigate } from 'react-router-dom';

import { URLS } from '../../app/urls';

export const CollectionForm = ({ onSuccess, onChange, state }) => {
    const Logger = logger();

    const navigate = useNavigate()

    const ENV = getEnv()

    const { resendLambda } = URLS[ENV]

    const [isLoading, setIsLoadiing] = useState(false)

    const { email, code, password } = state;

    const submitHandler = async () => {
        setIsLoadiing(true)

        try {
            await Auth.forgotPasswordSubmit(email, code, password);
            setIsLoadiing(false)
            onSuccess()
        } catch (error) {
            Logger.error("Auth.forgotPasswordSubmit", error);
            setIsLoadiing(false)
        }
    }

    const resendHandler = async () => {
        const postJsonOptions = createPostJsonOptions({ username: email })

        const response = await fetch(resendLambda, postJsonOptions);

        return response.json().then(data => {
            return {
                statusCode: response.status,
                data
            }
        });
    }

    const backHandler = event => {
        event.preventDefault()
        navigate('/login')
    }

    return (
        <form className="w-96 border border-black rounded-lg px-8">
            <div className="my-8">Please enter your email address in the field below. If there is an account associated with your email address, we will email you a password confirmation code.</div>
            <div className="my-4"><EmailInput name="email" label="Email" changeHandler={onChange} state={state} /></div>
            <div className="my-4"><TextInput name="code" label="Confirmation Code" changeHandler={onChange} state={state} /></div>
            <div className="my-4"><PasswordInput name="password" label="Password" changeHandler={onChange} state={state} /></div>
            <div>
                <Button isLoading={isLoading}>
                    <div className="flex flex-col w-full my-8">
                        <div className="flex justify-between">
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
                            <a href="/login" onClick={backHandler} className={`my-4 block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 self-center`}>Return to login</a>
                        </div>
                    </div>
                </Button>
            </div>
        </form>
    )
}