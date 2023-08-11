import { useSearchParams } from "react-router-dom"

import { FinancesList } from "./FinancesList/FinancesList"
import { FinanceDetails } from "./FinanceDetails/FinanceDetails"

export const FinancesTab = ({ caseInstance, dialogRef }) => {
    const [searchParams] = useSearchParams()
    const financeId = searchParams.get("finance")

    if (financeId) {
        return <FinanceDetails financeId={financeId} />
    }
    return <FinancesList caseInstance={caseInstance} dialogRef={dialogRef} />
}