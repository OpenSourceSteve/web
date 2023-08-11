import { useState } from 'react'
import { Auth } from 'aws-amplify'

import { Button, EmailInput, PasswordInput, TextInput } from "../../components"
import { createPostJsonOptions } from "../../utils";

// import styles from "./PasswordReset.module.css";

import { logger } from '../../utils/logger';
import { useNavigate } from 'react-router-dom';

const Logger = logger();

export const CollectionForm = ({ onSuccess, onChange, state, username }) => {
    const navigate = useNavigate()

    const [isLoading, setIsLoadiing] = useState(false)

    const submitHandler = async () => {
        setIsLoadiing(true)
        const { email, code, password } = state;

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
        const url = "https://eefdeymkkyztmk6tjodnilncbi0evtks.lambda-url.us-west-1.on.aws/";

        const postJsonOptions = createPostJsonOptions({ username })

        const response = await fetch(url, postJsonOptions);

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
            <EmailInput name="email" label="Email" changeHandler={onChange} state={state} />
            <TextInput name="code" label="Confirmation Code" changeHandler={onChange} state={state} />
            <PasswordInput name="password" label="Password" changeHandler={onChange} state={state} />
            <div>
                <Button isLoading={isLoading}>
                    <button type="button"
                        className={`
                            mt-10 px-4 py-2
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            block w-full
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}
                        onClick={submitHandler}>Submit</button>
                    <button type="button"
                        className={`
                            mt-8 px-4 py-2
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            block w-full
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}
                        onClick={resendHandler}>Resend Code</button>
                    <a href="/login" onClick={backHandler} className={`my-4 block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 self-center`}>Return to login</a>
                </Button>
            </div>
        </form>
    )
}