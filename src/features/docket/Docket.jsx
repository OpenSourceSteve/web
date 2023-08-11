import { useRef, useState } from 'react'

import { DocketSidebar } from './DocketSidebar'
import { CreateEventForm } from '../events/EventForm/CreateEventForm'
import { UpdateEventFormAsync } from '../events/EventForm/UpdateEventFormAsync'
import { Layout, Calendar } from '../../components'

export const Docket = () => {
  const createDialogRef = useRef(null)
  const updateDialogRef = useRef(null)

  const [caseId, setCaseId] = useState(null)
  const [eventId, setEventId] = useState(null)

  const toggleCreateFormHandler = () => {
    setEventId(eventId)
    const { current } = createDialogRef
    current.open ? current.close() : current.showModal()
  }

  const toggleUpdateFormHandler = (caseId, eventId) => {
    setCaseId(caseId)
    setEventId(eventId)
    const { current } = updateDialogRef
    current.open ? current.close() : current.showModal()
  }

  return (
    <Layout
      sidebarContent={<DocketSidebar onToggleEventForm={toggleCreateFormHandler} />}
      sectionContent={<Calendar toggleEventForm={toggleUpdateFormHandler} />}
      modalContent={(
        <>
        <CreateEventForm onCancel={toggleCreateFormHandler} ref={createDialogRef} />
        <UpdateEventFormAsync caseID={caseId}
          onToggleForm={toggleUpdateFormHandler}
          eventId={eventId}
          ref={updateDialogRef}
        />
        </>
      )}
    />
  )
}