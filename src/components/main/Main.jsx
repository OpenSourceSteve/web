export const Main = ({ children }) => {
    return (
        <main className={`
            w-full
            h-full
            flex
            container mx-auto
        `}>{children}</main>
    )
}