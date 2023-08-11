import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { CaseForm } from '../CaseForm/CaseForm';

import { useListCasesQuery } from '../casesSlice'

import { Layout } from '../../../components'

import { CasesEmptyState } from './CasesEmptyState'
import { CasesListSidebar } from './CasesListSidebar';
import { CasesTable } from './CasesTable';

export const CasesListView = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const dialogRef = useRef(null)

    const [searchParams] = useSearchParams()
    const createFor = searchParams.get("createFor")

    const {
        data: cases,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListCasesQuery({})

    const toggleFormHandler = () => {
        if (dialogRef.current.open) {
            dialogRef.current.close()
            if (location.search !== "") {
                navigate("/cases");
            }
        } else {
            dialogRef.current.showModal()
        }
    }

    useEffect(() => {
        if (createFor !== null && !dialogRef.current.open) {
            dialogRef.current.showModal()
        }
    }, [createFor, dialogRef])

    let content

    if (isLoading) {
        content = (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="basis-1/2 font-bold p-8">Cases</h2>
                <div className="basis-1/2">Loading...</div>
            </div>
        )
    }
    else if (isSuccess) {
        if (cases.length === 0) {
            content = <CasesEmptyState onCreate={toggleFormHandler} />
        }
        else {
            content = (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold p-8">Cases</h1>
                    <CasesTable cases={cases} />
                </div>
            )
        }
    } else if (isError) {
        if (error.status === 401) {
            navigate("/login")
        }
    }

    return (
        <Layout
            sidebarContent={(
                <CasesListSidebar cases={cases}
                    onToggleCaseForm={toggleFormHandler}
                />
            )}
            sectionContent={content}
            modalContent={(
                <CaseForm mode={"add"}
                    onCancel={toggleFormHandler}
                    ref={dialogRef}
                    clientId={createFor}
                />
            )}
        />
    )
}