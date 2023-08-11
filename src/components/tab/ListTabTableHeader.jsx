export const ListTableTableHeader = ({ headerClassName, headers }) => {
    return (
        <div className={headerClassName}>
            {headers.map(header => header)}
        </div>
    )
}