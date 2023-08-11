export const Section = ({ children }) => {
    return <section className={`
        h-full w-full
        overflow-scroll
        border-r border-l
        bg-white
        basis-5/6
    `}>{children}</section>
}