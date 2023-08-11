import { useNavigate } from "react-router-dom"

export const CasesTable = ({ cases }) => {
    const navigate = useNavigate()

    const clickHandler = ({ target }) => {
        const caseId = target.dataset['caseId'] || target.parentElement.dataset['caseId']
        navigate(`/cases/${caseId}`)
    }

    const keyDownHandler = ({ keyCode, target }) => {
        if (keyCode === 13) {
            const caseId = target.dataset['caseId']
            navigate(`/cases/${caseId}`)
        }
    }

    return (
        <table className="w-full">
            <thead className="">
                <tr className="flex border-b border-black mx-8 py-4">
                    <th className="basis-1/3 flex justify-start">Client(s)</th>
                    <th className="basis-1/3 flex justify-start">Court</th>
                    <th className="basis-1/3 flex justify-start">Prosecutor</th>
                </tr>
            </thead>
            <tbody className="">
                {cases.map(caseInstance => {
                    const client = caseInstance.Clients?.items[0]?.client;
                    return (
                        <tr key={caseInstance.id}
                            tabIndex={0}
                            className="flex py-4 mx-8 hover:bg-slate-100 cursor-pointer"
                            data-case-id={caseInstance.id}
                            onClick={clickHandler}
                            onKeyDown={keyDownHandler}
                        >
                            <td className="basis-1/3">{client?.lastName}, {client?.firstName}</td>
                            <td className="basis-1/3">{caseInstance.court}</td>
                            <td className="basis-1/3">{caseInstance.prosecutor}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}