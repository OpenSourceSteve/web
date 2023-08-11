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
            <tbody className="">
                {clients.map(client => (
                    <tr key={client.id}
                        tabIndex={0}
                        className="flex py-4 mx-8 hover:bg-slate-100 cursor-pointer"
                        data-client-id={client.id}
                        onClick={clickHandler}
                        onKeyDown={keyDownHandler}>
                        <td className="basis-1/4">{client.lastName}</td>
                        <td className="basis-1/4">{client.firstName}</td>
                        <td className="basis-1/4">{client.phone}</td>
                        <td className="basis-1/4">{client.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}