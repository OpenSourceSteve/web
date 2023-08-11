import { useNavigate, useParams } from "react-router-dom";

import { useListChargesQuery } from '../chargesSlice';

import { ChargeForm } from '../ChargeForm/ChargeForm'

import { ChargesEmptyState } from "./ChargesEmptyState"

import { chargeStatusMap } from "../chargeStatusMap";

import { ListTab } from "../../../components/tab/ListTab";

export const ChargesList = ({ dialogRef }) => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const {
        data: charges,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListChargesQuery({})

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            const chargeId = event.target.dataset['chargeId']
            navigate(`/cases/${caseId}?charge=${chargeId}`)
        }
    }

    const clickHandler = async event => {
        event.preventDefault()
        const chargeId = event.target.parentElement.dataset['chargeId']
        navigate(`?charge=${chargeId}`)
    }

    const headers = ["Status", "Statute", "Description"]

    const listHeaders = headers.map(header => <div className="basis-1/3" key={header}>{header}</div>)

    let listRows

    if (isSuccess) {
        listRows = charges.map(charge => {

            return (
                <div key={charge.id}
                    tabIndex={0}
                    className="hover:bg-slate-100 py-2"
                    data-charge-id={charge.id}
                    onKeyDown={e => keyDownHandler(e, charge.id)}
                >
                    <a className="flex"
                        // onKeyDown={e => keyDownHandler(e, charge)}
                        data-charge-id={charge.id}
                        onClick={clickHandler}
                        href={`/cases/${caseId}?view=/charges/${charge.id}`}
                    >
                        <div className="basis-1/3">{chargeStatusMap[charge.status] || ""}</div>
                        <div className="basis-1/3">{charge.statute || ""}</div>
                        <div className="basis-1/3">{charge.description || ""}</div>
                    </a>
                </div>
            )
        })
    }

    return (
        <ListTab
            dialogRef={dialogRef}
            listHeaderClassName="flex border-b border-black"
            listHeaders={listHeaders}
            listBodyClassName=""
            listRows={listRows}
            ResourceForm={ChargeForm}
            ResourceEmptyState={ChargesEmptyState} />
    )
}