import { useState } from "react";

import { createPostJsonOptions, getEnv } from "../../utils";
import { LAMBDAS } from "../../app/lambdas";

import { Button, NumberInput } from "../../components";

export const ConfirmationForm = ({ onSuccess, username }) => {
  const ENV = getEnv()

  const { confirmationURL, resendURL } = LAMBDAS[ENV];

  const [state, setState] = useState({ code: "" })
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = ({ target }) => {
    setState({
      ...state,
      code: target.value,
    })
  }

  const submitHandler = async () => {
    setIsLoading(true)

    const postJsonOptions = createPostJsonOptions({ username, code: state.code })

    const response = await fetch(confirmationURL, postJsonOptions);

    response.json().then(data => {
      if (response.status === 201) {
        onSuccess()
        setIsLoading(false)
      }
      if (response.status === 400) {
        const { field, errorMessage } = data.error;
        setState({
          ...state,
          error: { [field]: errorMessage }
        })
        setIsLoading(false)
      }
    });
  }

  const resendHandler = async () => {
    const postJsonOptions = createPostJsonOptions({ username })

    const response = await fetch(resendURL, postJsonOptions);

    return response.json().then(data => {
        return {
            statusCode: response.status,
            data
        }
    });
}

  return (
    <form className="w-96 border border-black rounded-lg p-8">
      <div className="pb-4">We just sent a confirmation code to the email you provided.</div>
      <div className="pb-4">Please enter your confirmation code in the field below.</div>
      <div>
        <NumberInput name={"code"} label={"Confirmation Code"} changeHandler={changeHandler} state={state} />
      </div>
      <Button isLoading={isLoading}>
        <button type="button"
          onClick={submitHandler}
          className={`
              mt-10 px-4 py-2
              rounded
              bg-blue-500 hover:bg-blue-400
              text-white font-semibold text-center
              w-40
              focus:outline-none
              focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
              cursor-pointer
          `}>Submit</button>
        <button type="button"
          onClick={resendHandler}
          className={`
              ml-4
              mt-10 px-4 py-2
              rounded
              text-slate-800 font-semibold text-center
              w-40
              focus:outline-none
              focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
              cursor-pointer
          `}>Resend Code</button>
      </Button>
    </form>
  )
}
