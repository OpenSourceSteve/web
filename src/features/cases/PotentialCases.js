// import { useListCasesWithNumberQuery } from "./casesSlice"

export const PotentialCases = ({ caseNumberName, caseHandler, clientCases }) => {

    // TODO: filter potentialCases by caseNumberName

    const keyDownHandler = ({ keyCode }, caseInstance) => {
        if (keyCode === 13) {
            caseHandler(caseInstance)
        }
    }

    if (clientCases?.length > 0) {
        return (
            <ul className="z-10 border border-black rounded-lg">
                {clientCases.map(clientCase => {
                    const caseInstance = clientCase['case']
                    return (
                    <li key={clientCase['case'].id}>
                        <div
                            tabIndex={0}
                            className="hover:bg-slate-100 focus:bg-slate-100 px-4 py-2"
                            onClick={() => caseHandler(caseInstance)}
                            onKeyDown={event => keyDownHandler(event, caseInstance)}
                            data-client-id={caseInstance.id}
                        >{caseInstance.caseNumber}: {caseInstance.caseName}</div>
                    </li>
                )})}
            </ul>
        )
    }
    return null;
}