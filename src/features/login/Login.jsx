import { LoginForm } from "./LoginForm"

import { Header, Section, Footer } from "../../components"


export const Login = () => {
    const links = ["signup"]

    return (
        <>
            <Header links={links} />
            <main className="h-full">
                <Section>
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-black">Login</h1>
                        <LoginForm />
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    )
}