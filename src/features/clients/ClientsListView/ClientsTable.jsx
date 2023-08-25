import { useNavigate } from "react-router-dom"

export const ClientsTable = ({ clients }) => {
    const navigate = useNavigate()

    const keyDownHandler = event => {
        if (event.keyCode === 13) {
            navigate(`/clients/${event.target.dataset['clientId']}`)
        }
    }

    const clickHandler = ({ target }) => {
        const clientId = target.dataset['clientId'] || target.parentElement.dataset['clientId']
        navigate(clientId)
    }

    return (
        <table className="w-full">
            <thead className="">
                <tr className="flex border-b border-black mx-8 py-4">
                    <th className="basis-1/4 flex justify-start"><span>Last Name</span></th>
                    <th className="basis-1/4 flex justify-start"><span>First Name</span></th>
                    <th className="basis-1/4 flex justify-start"><span>Phone Number</span></th>
                    <th className="basis-1/4 flex justify-start"><span>Email</span></th>
                </tr>
            </thead>
            <ol className="w-full">
                {clients.map(client => (
                    <li key={client.id}
                        tabIndex={0}
                        className="flex py-4 px-8 hover:bg-slate-100 w-full"
                        data-client-id={client.id}
                        onClick={clickHandler}
                        onKeyDown={keyDownHandler}><a className="w-full flex" href={`/clients/${client.id}`} aria-label={`${client.lastName} ${client.firstName}`}>
                        <div className="basis-1/4 capitalize inline">{client.lastName}</div>
                        <div className="basis-1/4 capitalize inline">{client.firstName}</div>
                        <div className="basis-1/4 inline">{client.phone}</div>
                        <div className="basis-1/4 inline">{client.email}</div>
                        </a>
                    </li>
                ))}
            </ol>
        </table>
    )
}