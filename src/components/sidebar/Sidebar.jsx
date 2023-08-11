export const Sidebar = ({ children }) => {
    return (
        <aside className={`
            h-full w-full
            overflow-scroll
            border-r border-l
            bg-white
            basis-1/6
            bg-slate-500
        `}>{ children }</aside>
    )
}