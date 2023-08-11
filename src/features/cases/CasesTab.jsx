import { useRef } from "react"

import { useNavigate } from "react-router-dom"

import { useListCasesByClientIdQuery } from "./casesSlice"

import { CasesEmptyState } from "./CasesListView/CasesEmptyState"
import { CasesTable }  from "./CasesListView/CasesTable"

import { CaseForm } from "./CaseForm/CaseForm"

export const CasesTab = ({ clientId }) => {
    const navigate = useNavigate()

    const dialogRef = useRef(null)

    const {
        data: cases,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListCasesByClientIdQuery(clientId)

    const toggleFormDialog = () => {
        const { current } = dialogRef
        current.open ? current.close() : current.showModal()
    }

    let content

    if (isLoading) {
        content = <h2>Loading...</h2>
    }
    else if (isSuccess) {
        content = (
            <>
                {cases.length === 0 ? <CasesEmptyState onCreate={toggleFormDialog} /> : <CasesTable cases={cases} />}
                <CaseForm ref={dialogRef} onCancel={toggleFormDialog} />
            </>
        )
    }
    else if (isError) {
        if (error.status === 403) {
            navigate("/login")
        }
    }

    return content
}