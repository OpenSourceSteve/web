import { useNavigate } from 'react-router-dom';

import { Header, Section, Footer } from "../../components"

import { SignupForm } from './SignupForm';

export const Signup = () => {
    const navigate = useNavigate()

    const onSignupSuccess = ({ statusCode }) => {

        if (statusCode === 202) {
            navigate('/confirmation')
        }
    }

    const links = ["login"]

    return (
        <>
            <Header links={links} />
            <main className="h-full">
                <Section>
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1>Sign Up</h1>
                        <SignupForm onSuccess={onSignupSuccess} />
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    )
}