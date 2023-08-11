import { useGetFinanceQuery } from "../financesSlice"

import { FinanceForm } from "../FinanceForm/FinanceForm"

import { DetailsTab } from "../../../components"

export const FinanceDetails = ({ financeId }) => {
    const {
        data: finance,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetFinanceQuery({ id: financeId })

    let content

    if (isSuccess) {
        content = (
            <>
                <div>
                    Title: {finance.title}
                </div>
                <div>
                    Description: {finance.description}
                </div>
                <div>
                    Expense: {finance.expense}
                </div>
                <div>
                    Payment: {finance.payment}
                </div>
            </>
        )
    }

    // return content
    return <DetailsTab resourceName="Finance"
        resource={finance}
        ResourceForm={FinanceForm}
        title={"Finance Details"}
        resourceDetailContent={content}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
    />
}