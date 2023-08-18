import { useEffect, useState } from "react"

import { Auth } from "aws-amplify"

import { Button, PasswordInput } from "../../components"

export const ChangePasswordForm = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(data => {
            setUser(data)
        })
    }, [])

    const submitHandler = async () => {
        setIsLoading(true)
        try {
            await Auth.changePassword(user, state.old, state.new)
            setIsLoading(false)
            setIsSuccess(true)
            changeHandler({target: {name: "error", value: false}})
        } catch (error) {
            setIsLoading(false)
            changeHandler({target: {name: "error", value: true}})
        }
    }

    const [state, setState] = useState({
        old: "",
        new: ""
      })

      const changeHandler = ({ target }) => {
        const { name, value } = target
        setState({
          ...state,
          [name]: value
        })
      }

    return (
        <div className="p-4">
            <h1>Change Password</h1>
            {isSuccess ? (
                <div>Password successfully changed.</div>
            ) : (
                <form className="w-64 border border-black px-8">
                <div className="py-4">
                    <PasswordInput name="old" label="Old Password" state={state} changeHandler={changeHandler} />
                </div>
                <div className="py-4">
                    <PasswordInput name="new" label="New Password" state={state} changeHandler={changeHandler} />
                </div>
                <div>
                    <Button isLoading={isLoading}>
                        <button type="button" className={`
                            px-4 py-2 my-4
                            rounded
                            bg-blue-500 hover:bg-blue-400
                            text-white font-semibold text-center
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `} onClick={submitHandler}>Change Password</button>
                    </Button>
                    {state.error && <div className="text-red-500">There was a problem changing password</div>}
                </div>
            </form>
            )}

        </div>
    )
}