import { useListEventsQuery } from '../events/eventsSlice'

import { NextEvent } from './NextEvent'
import { Welcome } from './Welcome'

export const DocketEmptyState = () => {
  // if no events, get NEXT event
  const {
      data: nextEvent,
      isLoading: isNextLoading,
      isSuccess: isNextSuccess,
      isError: isNextError,
      error: nextError
  } = useListEventsQuery({ next: true })

  if (isNextLoading) {
    return <div>Loading...</div>
  } else if (isNextSuccess && nextEvent.length > 0) {
    return <NextEvent nextEvent={nextEvent} />
  } else {
    return <Welcome />
  }
}