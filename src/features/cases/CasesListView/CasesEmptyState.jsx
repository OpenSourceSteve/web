import { useNavigate } from 'react-router-dom'
import { useListClientsQuery } from '../../clients/clientsSlice'

export const CasesEmptyState = ({ onCreate }) => {
    const navigate = useNavigate()

    const {
        data: clients,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListClientsQuery({})

    let content

    if (isLoading) {
        content = (
            <div>Loading...</div>
        )
    } else if (isSuccess && clients) {
        const hasClients = clients?.length > 0
        if (hasClients) {
            content = (
                <button type="button"
                    className={`
                        px-4 py-2
                        rounded
                        bg-blue-500 hover:bg-blue-400
                        text-white font-semibold text-center
                        block
                        focus:outline-none
                        focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                        cursor-pointer
                    `}
                    onClick={onCreate}
                >Add New Case</button>
            )
        } else {
            content = (
                <>
                    <h2>And you also don't have any clients.</h2>
                    <p>You can create a case as soon as you add a new client.</p>
                    <p>Use the <strong>Clients</strong> link above to navigate to the clients page.</p>
                </>
            )
        }
    } else if (isError) {
        if (error.status === 401) {
            navigate("/login")
        }
    }

    return (
        <div className="flex flex-col p-8 items-center">
            <h1 className="mb-4">Cases</h1>
            <h2>You have don't have any cases yet.</h2>
            <p className="mb-8">Would you like to add a new one?</p>
            {content}
        </div>
    )
}