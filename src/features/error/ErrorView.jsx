import { Header, Section, Footer } from "../../components"

import { pages } from '../../app/pages'

export const ErrorView = () => {
    return (
        <>
            <Header pages={pages} />
            <main className="h-full">
                <Section>
                    <div className="h-full flex justify-center items-center">
                        <div>There was an error loading this page.</div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>

    )
}