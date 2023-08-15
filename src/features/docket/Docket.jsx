import { useRef, useState } from 'react'

import { DocketSidebar } from './DocketSidebar'
import { DocketCreateEventForm } from '../events/EventForm/DocketCreateEventForm'
import { DocketUpdateEventForm } from '../events/EventForm/DocketUpdateEventForm'
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
          <DocketCreateEventForm onCancel={toggleCreateFormHandler} ref={createDialogRef} />
          <DocketUpdateEventForm caseID={caseId}
            onToggleForm={toggleUpdateFormHandler}
            eventId={eventId}
            ref={updateDialogRef}
          />
        </>
      )}
    />
  )
}