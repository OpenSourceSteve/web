import { useGetClientQuery } from "../clients/clientsSlice"

export const ClientAssignee = ({ clientId, className }) => {
    const {
        data: client,
        isLoading,
        isSuccess,
        isError: isLoadError,
        error
    } = useGetClientQuery({ id: clientId })

    let content

    if (isLoading) {
        content = <div className={className}>Loading...</div>
    } else if (isSuccess && client) {
        content = <div className={className}>{client.firstName} {client.lastName}</div>
    } else {
        content = <div className={className}>Unavailable</div>
    }
    return content
}