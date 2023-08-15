import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetCaseQuery } from '../casesSlice'

import {
    EventsTab,
    ChargesTab,
    NotesTab,
    TasksTab,
    FinancesTab
} from '../../index'

import { Layout, TabbedNav } from '../../../components'
import { CaseForm } from '../CaseForm/CaseForm'

import { CaseDetailsSidebar } from './CaseDetailsSidebar'
import { CaseDetails } from './CaseDetails'

export const CaseDetailsView = () => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const navTabs = [
        "Events",
        "Charges",
        "Notes",
        "Tasks",
        "Finances"
    ]

    const [activeTab, setActiveTab] = useState(navTabs[0])

    const caseDialogRef = useRef(null)
    const eventDialogRef = useRef(null)
    const chargeDialogRef = useRef(null)
    const noteDialogRef = useRef(null)
    const taskDialogRef = useRef(null)
    const financeDialogRef = useRef(null)

    const dialogRefMap = {
        "Cases": caseDialogRef,
        "Events": eventDialogRef,
        "Charges": chargeDialogRef,
        "Notes": noteDialogRef,
        "Tasks": taskDialogRef,
        "Finances": financeDialogRef
    }

    const [activeTabDialogRef, setActiveTabDialogRef] = useState(eventDialogRef)

    const {
        data: caseInstance,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCaseQuery({ id: caseId })

    const keyDownHandler = event => {
        if (event.keyCode === 13) {
            navigate('/cases')
        }
    }

    const toggleDialog = dialogRef => {
        if (dialogRef.current.open) {
            dialogRef.current.close()
        } else {
            dialogRef.current.showModal()
        }
    }

    const navTabHandler = ({ target }) => {
        setActiveTab(target.dataset['tab'])
        setActiveTabDialogRef(dialogRefMap[target.dataset['tab']])
    }

    let content

    if (isLoading) {
        <h2 className="">Loading...</h2>
    } else if (isSuccess && caseInstance) {
        if (caseInstance) {
            const { caseNumber, caseName } = caseInstance;
            content = (
                <div className="flex flex-col items-center">
                    <h1 className="p-8 font-bold">Case: {caseNumber}: {caseName}</h1>
                    <CaseDetails caseInstance={caseInstance} dialogRef={caseDialogRef} toggleFormDialog={toggleDialog}/>
                    <TabbedNav activeTab={activeTab} tabs={navTabs} navTabHandler={navTabHandler}>
                        {activeTab === "Events" && <EventsTab dialogRef={eventDialogRef} />}
                        {activeTab === "Charges" && <ChargesTab caseInstance={caseInstance} dialogRef={chargeDialogRef} />}
                        {activeTab === "Notes" && <NotesTab caseInstance={caseInstance} dialogRef={noteDialogRef} />}
                        {activeTab === "Tasks" && <TasksTab caseInstance={caseInstance} dialogRef={taskDialogRef} />}
                        {activeTab === "Finances" && <FinancesTab caseInstance={caseInstance} dialogRef={financeDialogRef} />}
                    </TabbedNav>
                </div>
            )
        }
        else {
            content = <h2>Client Not Found</h2>
        }
    } else if (isError) {
        if (error.status === 403) {
            navigate("/login")
        }
    }

    const callToAction = dialogRef => (
        <button onClick={() => toggleDialog(dialogRef)}
            className={`
                mt-4
                px-4 py-2
                rounded
                bg-blue-500 hover:bg-blue-400
                text-white font-semibold text-center
                block
                focus:outline-none
                focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                cursor-pointer
            `}
        >{`Create New ${activeTab.slice(0, -1)}`}</button>
    )

    return (
        <Layout
            sidebarContent={(
                <CaseDetailsSidebar keyDownHandler={keyDownHandler}
                    callToAction={callToAction(activeTabDialogRef)}
                />
            )}
            sectionContent={content}
            modalContent={(
                <CaseForm ref={caseDialogRef}
                    onCancel={toggleDialog}
                    caseInstance={caseInstance}
                />
            )}
        />
    )
}