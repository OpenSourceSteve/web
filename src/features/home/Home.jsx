import { Header, Main, Section, Footer } from '../../components'

// import styles from './Home.module.css'

export const Home = () => {
    const links = ["login", "signup"]
    return (
        <>
            <Header links={links} />
            <Main>
                <Section>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <h1>This is the homepage.</h1>
                        <div>This is homepage content.</div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}