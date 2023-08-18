import { useEffect, useState } from "react"

import { Auth } from "aws-amplify"

export const Profile = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [currentSession, setCurrentSession] = useState(null)

    useEffect(() => {
        Auth.currentSession().then(data => {
            setCurrentSession(data)
            setIsLoading(false)
        })
    }, [])

    let content

    if (isLoading) {
        content = "Loading..."
    } else {
        const { idToken } = currentSession
        const { payload } = idToken
        const userId = payload['cognito:username']
        const authTime = new Date(payload.auth_time * 1000)
        const expirationTime = new Date(payload.exp * 1000)
        const email = payload.email
        content = (
            <>
                <div className="p-4">Email: {email}</div>
                <div className="p-4">Token updated: {authTime.toLocaleString()}</div>
                <div className="p-4">Token updates: {expirationTime.toLocaleString()}</div>
            </>
        )
    }

    return <div className="p-4">{content}</div>
}