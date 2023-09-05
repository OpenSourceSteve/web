import { useListClientsQuery } from '../clients/clientsSlice'
import { useListCasesQuery } from '../cases/casesSlice'

export const Welcome = () => {

    const {
        data: clients,
        isLoading: isClientsLoading,
        isSuccess: isClientsSuccess,
        isError: isClientsError,
        error: clientsError
    } = useListClientsQuery({})

    const {
        data: cases,
        isLoading: isCasesLoading,
        isSuccess: isCasesSuccess,
        isError: isCasesError,
        error: casesError
    } = useListCasesQuery({})

    let clientContent = <li>Create a client</li>

    if (!isClientsLoading && isClientsSuccess && clients.length > 0) {
        clientContent = <li>Create a client <span>✅</span></li>
    }

    let caseContent = <li>Create a case for that client</li>

    if (!isCasesLoading && isCasesSuccess && cases.length > 0) {
        caseContent = <li>Create a case for that client <span>✅</span></li>
    }

    return (
        <div className="flex flex-col p-8 items-center">
            <h1 className="mb-8">Welcome to EasyLegal.app</h1>
            <p className="w-96 mb-8">This is the page where you'll usually see the events you've got scheduled, but right now you don't have any future events scheduled.</p>
            <p className="w-96 mb-4">Follow these steps to get started:</p>
            <ol className="list-decimal list-inside">
                {clientContent}
                {caseContent}
                <li>Schedule some events for that case</li>
                <li>Come back to this page and checkout your Docket!</li>
            </ol>
        </div>
    )
}