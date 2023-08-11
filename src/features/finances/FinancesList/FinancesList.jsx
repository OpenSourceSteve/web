import { useNavigate, useParams } from "react-router-dom";

import { useListFinancesQuery } from '../financesSlice';

import { FinanceForm } from '../FinanceForm/FinanceForm'

import { FinancesEmptyState } from "./FinancesEmptyState"

import { ListTab } from "../../../components/tab/ListTab";

export const FinancesList = ({ dialogRef, clientId }) => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const {
        data: finances,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListFinancesQuery({})

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            const financeId = event.target.dataset['financeId']
            navigate(`/cases/${caseId}?finance=${financeId}`)
        }
    }

    const clickHandler = async event => {
        event.preventDefault()
        const financeId = event.target.parentElement.dataset['financeId']
        navigate(`?finance=${financeId}`)
    }

    const headers = ["Title", "Description", "Expense", "Payment"]

    const listHeaders = headers.map(header => <div className="basis-1/4" key={header}>{header}</div>)

    let listRows

    if (isSuccess) {
        listRows = finances.map(finance => {

            return (
                <div key={finance.id}
                    tabIndex={0}
                    className="hover:bg-slate-100 py-2"
                    data-finance-id={finance.id}
                    onKeyDown={e => keyDownHandler(e, finance.id)}
                >
                    <a className="flex"
                        // onKeyDown={e => keyDownHandler(e, finance)}
                        data-finance-id={finance.id}
                        onClick={clickHandler}
                        href={`/cases/${caseId}?view=/finances/${finance.id}`}
                    >
                        <div className="basis-1/4">{finance.title}</div>
                        <div className="basis-1/4">{finance.description}</div>
                        <div className="basis-1/4">{finance.expense}</div>
                        <div className="basis-1/4">{finance.payment}</div>
                    </a>
                </div>
            )
        })
    }

    return (
        <ListTab
            clientID={clientId}
            dialogRef={dialogRef}
            listHeaderClassName="flex border-b border-black"
            listHeaders={listHeaders}
            listBodyClassName=""
            listRows={listRows}
            ResourceForm={FinanceForm}
            ResourceEmptyState={FinancesEmptyState} />
    )
}