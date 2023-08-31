import { useGetClientsWithNameQuery } from "./clientsSlice"

export const PotentialClients = ({ partialName, clientHandler }) => {
    const { data: potentialClients, isLoading, isSuccess } = useGetClientsWithNameQuery({
        filter: {
            or: [
                { firstName: { contains: partialName.toLowerCase() } },
                { lastName: { contains: partialName.toLowerCase() } }
            ]
        }
    })

    const keyDownHandler = ({ keyCode }, client) => {
        if (keyCode === 13) {
            clientHandler(client)
        }
    }

    if (isLoading) {
        return (
            <ul className="z-10 border border-black rounded-lg">
                <li key={"loader"}>
                    <div className="hover:bg-slate-100 px-4 py-2">Loading...</div>
                </li>
            </ul>
        )
    } else if (isSuccess && potentialClients.length > 0) {
        return (
            <ul className="z-10 border border-black rounded-lg">
                {potentialClients.map(potentialClient => {
                    return (
                        <li key={potentialClient.id}>
                            <div tabIndex={0}
                                className="hover:bg-slate-100 px-4 py-2 capitalize cursor-pointer"
                                onClick={() => clientHandler(potentialClient)}
                                onKeyDown={event => keyDownHandler(event, potentialClient)}
                                data-client-id={potentialClient.id}
                            >{potentialClient.firstName} {potentialClient.lastName}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}