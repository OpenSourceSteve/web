import { useState } from "react";
import { useDispatch } from 'react-redux'

import {
  createPostJsonOptions,
  trimAndDecreaseCase,
  getEnv,
  logger
} from "../../utils";

import { setUsername } from './signupSlice'

import {
  Button,
  DangerouslyLabelledCheckboxInput,
  EmailInput,
  PasswordInput,
  TextInput
} from "../../components";

import { LAMBDAS } from "../../app/lambdas";

export const SignupForm = ({ onSuccess }) => {
  const Logger = logger();

  const dispatch = useDispatch()

  const ENV = getEnv()

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    consentsToTermsAndConditions: false,
    hasErrors: false
  })

  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = ({ target }) => {
    const { checked, name, type, value } = target;
    setUserData({
      ...userData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const onError = ({ data, statusCode }) => {
    const { errorMessage, field } = data;
    setUserData({
      ...userData,
      error: {
        [field]: errorMessage
      },
      hasErrors: true
    })
  }

  const isUserSubmittedDataValid = userSubmittedData => {
    const { firstName, lastName, email, password, confirmPassword, consentsToTermsAndConditions } = userSubmittedData

    if (firstName === "" && lastName === "") {
      const errorMessage = "Users must have at least one name."
      onError({ data: { field: "firstName", errorMessage } });
      return false;
    }
    if (email.slice(1, -1).indexOf("@") === -1) {
      const errorMessage = "Users must have a valid email address."
      onError({ data: { field: "email", errorMessage } })
      return false;
    }
    if (password.length < 8) {
      const errorMessage = "Password must be at least 8 characters."
      onError({ data: { field: "password", errorMessage } })
      return false;
    }
    if (password !== confirmPassword) {
      const errorMessage = "Password and Confirm Password must match."
      onError({ data: { field: "confirmPassword", errorMessage } })
      return false;
    }
    if (!consentsToTermsAndConditions) {
      const errorMessage = "Users must consent to EasyLegal.app's terms and conditions."
      onError({ data: { field: "consentsToTermsAndConditions", errorMessage } })
      return false;
    }
    return true;
  }

  const submitHandler = async () => {
    setIsLoading(true);
    const userSubmittedData = Object.assign({}, userData)

    const fieldsToTrimAndDecreaseCase = ["firstName", "lastName", "email"]
    trimAndDecreaseCase(userSubmittedData, fieldsToTrimAndDecreaseCase)
    dispatch(setUsername(userSubmittedData.email))

    if (isUserSubmittedDataValid(userSubmittedData)) {
      // Create user and record of consent
      const postJsonOptions = createPostJsonOptions(userSubmittedData);
      try {
        const response = await fetch(LAMBDAS[ENV].signupURL, postJsonOptions);

        response.json().then(data => {
          setIsLoading(false);
          const { error } = data;
          error ? onError({ statusCode: 400, data: error }) : onSuccess({ statusCode: response.status, data: { username: userData.email } })
        })
      } catch (error) {
        Logger.error("Sign up:", error);
      }
    } else {
      setIsLoading(false);
    }
  }

  return (
    <form className="w-96 border border-black rounded-lg px-8">
      <div className="py-4">
        <TextInput name="firstName" label="First Name" changeHandler={changeHandler} state={userData} />
      </div>
      <div className="py-4">
        <TextInput name="lastName" label="Last Name" changeHandler={changeHandler} state={userData} />
      </div>
      <div className="py-4">
        <EmailInput name="email" label="Email Address" changeHandler={changeHandler} state={userData} />
      </div>
      <div className="py-4">
        <PasswordInput name="password" label="Password" changeHandler={changeHandler} state={userData} />
      </div>
      <div className="py-4">
        <PasswordInput name="confirmPassword" label="Confirm Password" changeHandler={changeHandler} state={userData} />
      </div>
      <div className="py-4">
        <DangerouslyLabelledCheckboxInput
          name="consentsToTermsAndConditions"
          label="I consent to EasyLegal.app's <a href='/terms-and-conditions' onClick={termsHandler} >terms and conditions</a>."
          changeHandler={changeHandler} state={userData}
        />
      </div>

      <div className="my-4">
        <Button isLoading={isLoading}>
          <button type="button"
            onClick={submitHandler}
            className={`
              px-4 py-2
              rounded
              bg-blue-500 hover:bg-blue-400
              text-white font-semibold text-center
              block
              focus:outline-none
              focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
              cursor-pointer
          `}>Submit</button>
        </Button>
        <div className="text-red-500">{userData.error?.["submit"]}</div>
      </div>
    </form>
  )
}