import { useState } from 'react'

import { Header, Main, Section, Footer } from '../../components'

import { EmailForm } from './EmailForm'
import { CollectionForm } from './CollectionForm'
import { ConfirmationMessage } from './ConfirmationMessage'

export const PasswordReset = ({ onBack }) => {
    const [state, setState] = useState({ email: "", code: "", password: "" });
    const [showEmailForm, setShowEmailForm] = useState(true)
    const [showCollectionForm, setShowCollectionForm] = useState(false)
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)

    const changeHandler = ({ target }) => {
        const { name, value } = target;

        setState({
            ...state,
            [name]: value
        })
    }

    const emailSuccessHandler = () => {
        setShowEmailForm(false)
        setShowCollectionForm(true)
    }

    const collectionSuccessHandler = () => {
        setShowCollectionForm(false)
        setShowConfirmationMessage(true)
    }

    const links = ["login"]

    return (
        <>
            <Header links={links} />
            <main className="h-full">
                <Section>
                    <div className="flex justify-center items-center h-full">
                        {showEmailForm && <EmailForm onSuccess={emailSuccessHandler} onChange={changeHandler} state={state} onBack={onBack} />}
                        {showCollectionForm && <CollectionForm onSuccess={collectionSuccessHandler} onChange={changeHandler} state={state} onBack={onBack} />}
                        {showConfirmationMessage && <ConfirmationMessage />}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    )
}