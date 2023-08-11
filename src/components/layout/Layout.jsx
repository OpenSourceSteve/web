import { Header, Main, Sidebar, Section, Footer } from '../../components'
import { pages } from '../../app/pages'

export const Layout = ({ sidebarContent, sectionContent, modalContent }) => {
    return (
        <>
            <Header pages={pages} />
            <Main>
                <Sidebar>{sidebarContent}</Sidebar>
                <Section>{sectionContent}</Section>
            </Main>
            <Footer />
            {modalContent}
        </>
    )
}