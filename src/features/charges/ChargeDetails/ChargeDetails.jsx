import { useGetChargeQuery } from "../chargesSlice"

import { ChargeForm } from "../ChargeForm/ChargeForm"

import { chargeStatusMap } from "../chargeStatusMap"

import { DetailsTab } from "../../../components"

export const ChargeDetails = ({ chargeId }) => {
    const {
        data: charge,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetChargeQuery({ id: chargeId })

    let content

    if (isSuccess) {
        content = (
            <>
                <div>
                    Status: {chargeStatusMap[charge.status]}
                </div>
                <div>
                    Statute: {charge.statute}
                </div>
                <div>
                    Description: {charge.description}
                </div>
            </>
        )
    }

    // return content
    return <DetailsTab resourceName="Charge"
        resource={charge}
        ResourceForm={ChargeForm}
        title={"Charge Details"}
        resourceDetailContent={content}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
    />
}