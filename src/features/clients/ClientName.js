import { useGetClientQuery } from './clientsSlice'

import { logger } from '../../utils/logger'

const Logger = logger()

export const ClientName = ({ clientId }) => {

    const {
        data: client,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetClientQuery({id: clientId})

    let content

    if (isLoading) {
        content = <div>Loading...</div>
    }
    else if (isSuccess) {
        content = <div id="clientName" className="pb-2">{client.firstName + " " + client.lastName}</div>
    } else if (isError) {
        content = <div>There was an error retrieving client data.</div>>
        Logger.error("Getting client in ClientName", error)
    }
    return content
}