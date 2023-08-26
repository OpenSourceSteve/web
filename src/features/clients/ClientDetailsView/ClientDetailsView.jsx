import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
    useDeleteClientMutation,
    useGetClientQuery
} from '../clientsSlice'

import { CasesTab } from '../../cases'
import { FinancesTab } from '../../finances'

import { Layout, TabbedNav } from '../../../components'
import { ClientDetailsSidebar } from './ClientDetailsSidebar'
import { ClientForm } from '../ClientForm/ClientForm';
import { ClientDetails } from './ClientDetails'

export const ClientDetailsView = () => {
    const navigate = useNavigate()

    const navTabs = [
        "cases",
        "finances"
    ]

    const [activeTab, setActiveTab] = useState(navTabs[0])

    const dialogRef = useRef(null)

    const { clientId } = useParams();

    const {
        data: client,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetClientQuery({ id: clientId })

    const [deleteClient] = useDeleteClientMutation()

    const toggleFormDialog = () => {
        const { current } = dialogRef;
        current.open ? current.close() : current.showModal()
    }

    const navTabHandler = ({ target }) => {
        setActiveTab(target.dataset['tab'])
    }

    const deleteClientHandler = async setIsDeleting => {
        setIsDeleting(true)
        await deleteClient({input: {
            id: clientId,
            _version: client._version
        }})
        setIsDeleting(false)
        navigate("/clients")
    }

    let content

    if (isLoading) {
        <h2 className="">Loading...</h2>
    } else if (isSuccess) {
        if (client) {
            content = (
                <div className="flex flex-col items-center">
                    <h1 className="p-8 font-bold capitalize">Client: {client.firstName} {client.lastName}</h1>
                    <ClientDetails client={client} toggleFormDialog={toggleFormDialog} deleteClient={deleteClientHandler} dialogRef={dialogRef} />
                    <TabbedNav activeTab={activeTab} tabs={navTabs} navTabHandler={navTabHandler}>
                        {activeTab === "cases" && <CasesTab clientId={clientId} />}
                        {activeTab === "finances" && <FinancesTab clientId={clientId} />}
                    </TabbedNav>
                </div>
            )
        }
        else {
            content = (
                <div className="flex justify-center">
                    <h2 className="pt-8 font-bold">Client Not Found</h2>
                </div>
            )
        }
    }
    else if (isError) {
        if (error.status === 403) {
            navigate("/login")
        }
    }

    return (
        <>
            <Layout
                sidebarContent={<ClientDetailsSidebar />}
                sectionContent={content}
                modalContent={<ClientForm mode="edit" onCancel={toggleFormDialog} clientData={client} ref={dialogRef} />}
            />
        </>
    )
}