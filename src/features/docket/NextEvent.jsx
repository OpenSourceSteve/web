import { useNavigate } from "react-router-dom";

export const NextEvent = ({ nextEvent }) => {
  const navigate = useNavigate()

  const startDateStr = nextEvent[0].startDatetime.slice(0, 10);

  const clickHandler = event => {
    event.preventDefault()
    navigate(`/docket?date=${startDateStr}`)
  }

  const content = (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="pt-4 font-bold">Docket</h2>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mb-4">You don't have any events scheduled today.</div>
        <div className="hover:bg-slate-100 p-2 rounded-lg">Your next event is scheduled on <a href={`/docket?date=${startDateStr}`} onClick={clickHandler} className="text-blue-500">{startDateStr}</a></div>
      </div>
    </div>

  )
  return content
}