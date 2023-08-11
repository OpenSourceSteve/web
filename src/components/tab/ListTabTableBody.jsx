export const ListTableTableBody = ({ bodyClassName, listRows}) => {
    return (
        <div className={bodyClassName}>
            {listRows.map(row => row)}
        </div>
    )
}