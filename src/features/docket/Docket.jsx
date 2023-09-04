import { useRef, useState } from 'react'

import { useListEventsQuery } from '../events/eventsSlice'

import { DocketEmptyState } from './DocketEmptyState'
import { DocketSidebar } from './DocketSidebar'
import { DocketCreateEventForm } from '../events/EventForm/DocketCreateEventForm'
import { DocketUpdateEventForm } from '../events/EventForm/DocketUpdateEventForm'
import { Layout, Calendar } from '../../components'

import { constructDateString } from '../../utils'
import { constructTomorrowString } from '../../utils'

export const Docket = () => {
  const createDialogRef = useRef(null)
  const updateDialogRef = useRef(null)

  const [caseId, setCaseId] = useState(null)
  const [eventId, setEventId] = useState(null)

  const today = new Date()
  const todayStr = constructDateString(today) + "T00:00:00.000Z"
  const tomorrowStr = constructTomorrowString(today) + "T00:00:00.000Z"

  // retrieve today's events
  const {
    data: events,
    isLoading,
    isSuccess,
    isError,
    error
  } = useListEventsQuery({ filter: { startDatetime: { between: [todayStr, tomorrowStr] } } })

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

  let content

  if (isLoading) {
    content = <div>Loading...</div>
  } else if (isSuccess) {
    if (events.length === 0) {
      content = <DocketEmptyState />
    } else {
      content = <Calendar toggleEventForm={toggleUpdateFormHandler} />
    }
  } else if (isError) {
    content = <div>Error: {error.message}</div>
  }

  return (
    <Layout
      sidebarContent={<DocketSidebar onToggleEventForm={toggleCreateFormHandler} />}
      sectionContent={content}
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