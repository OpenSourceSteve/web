import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useListClientsQuery } from '../clientsSlice';

import { Layout } from '../../../components'
import { ClientsEmptyState } from './ClientsEmptyState';
import { ClientsListSidebar } from './ClientsListSidebar';

import { ClientForm } from '../ClientForm/ClientForm';
import { ClientsTable } from './ClientsTable';

export const ClientsListView = () => {
    const navigate = useNavigate()

    const dialogRef = useRef(null)

    const {
        data: clients,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListClientsQuery({})

    const toggleFormHandler = () => {
        const { current } = dialogRef
        current.open ? current.close() : current.showModal()
    }

    let content

    if (isLoading) {
        content = (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="basis-1/2 font-bold p-8">Clients</h2>
                <div className="basis-1/2">Loading...</div>
            </div>
        )
    }
    else if (isSuccess) {
        // A11Y NOTE: Firefox needs onKeyDown handler on anchor, Chrome needs on div & anchor
        if (clients.length === 0) {
            content = <ClientsEmptyState openModal={toggleFormHandler} />
        } else {
            content = (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold p-8">Clients</h1>
                    <ClientsTable clients={clients} />
                </div>
            )
        }
    }
    else if (isError) {
        if (error.status === 401) {
            navigate("/login")
        }
    }

    return (
        <Layout
            sidebarContent={(
                <ClientsListSidebar clients={clients} onToggleForm={toggleFormHandler} />
            )}
            sectionContent={content}
            modalContent={(
                <ClientForm onCancel={toggleFormHandler} ref={dialogRef} />
            )}
        />
    )
}