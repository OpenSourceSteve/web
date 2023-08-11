import { useSearchParams } from "react-router-dom"

import { ChargesList } from "./ChargesList/ChargesList"
import { ChargeDetails } from "./ChargeDetails/ChargeDetails"

export const ChargesTab = ({ caseInstance, dialogRef }) => {
    const [searchParams] = useSearchParams()
    const chargeId = searchParams.get("charge")

    if (chargeId) {
        return <ChargeDetails chargeId={chargeId} />
    }
    return <ChargesList caseInstance={caseInstance} dialogRef={dialogRef} />
}