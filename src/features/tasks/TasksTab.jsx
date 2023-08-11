import { useSearchParams } from "react-router-dom"

import { TasksList } from "./TasksList/TasksList"
import { TaskDetails } from "./TaskDetails/TaskDetails"

export const TasksTab = ({ caseInstance, dialogRef }) => {
    const [searchParams] = useSearchParams()
    const taskId = searchParams.get("task")

    if (taskId) {
        return <TaskDetails taskId={taskId} />
    }
    return <TasksList caseInstance={caseInstance} dialogRef={dialogRef} />
}