import { useState } from "react"
import { useSelector } from "react-redux"

import { Header, Main, Section, Footer } from "../../components"

import { ConfirmationForm } from './ConfirmationForm'
import { ConfirmationMessage } from './ConfirmationMessage'

export const Confirmation = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const username = useSelector((state) => state.signup.username) || ""

    const onConfirmationSuccess = () => {
        setIsConfirmed(true)
    }

    const links = ['login']

    return (
        <>
            <Header links={links} />
            <Main>
                <Section>
                    <div className="w-full h-full flex justify-center items-center">
                        {!isConfirmed && <ConfirmationForm onSuccess={onConfirmationSuccess} username={username} />}
                        {isConfirmed && <ConfirmationMessage />}
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}