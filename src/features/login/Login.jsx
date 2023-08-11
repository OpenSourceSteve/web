import { LoginForm } from "./LoginForm"

import { Header, Section, Footer } from "../../components"


export const Login = () => {
    const links = ["signup"]

    return (
        <>
            <Header links={links} />
            <main className="h-full">
                <Section>
                    <div className="flex justify-center items-center h-full">
                        <LoginForm />
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    )
}