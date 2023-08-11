import { useGetTaskQuery } from "../tasksSlice"

import { TaskForm } from "../TaskForm/TaskForm"

import { DetailsTab } from "../../../components"
import { Assignee } from "../Assignee"

export const TaskDetails = ({ taskId }) => {
    const {
        data: task,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTaskQuery({ id: taskId })

    let content

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isSuccess) {
        content = (
            <>
                <div>Title: {task.title}</div>
                <div>Description: {task.description}</div>
                <div>Deadline: {task.deadline}</div>
                <Assignee clientId={task.clientID} lawyerId={task.lawyerID} showAssignee={true} />
                <div>Status: {task.status}</div>
            </>
        )
    }

    return <DetailsTab resourceName="Task"
        resource={task}
        ResourceForm={TaskForm}
        title={"Task Details"}
        resourceDetailContent={content}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
    />
}