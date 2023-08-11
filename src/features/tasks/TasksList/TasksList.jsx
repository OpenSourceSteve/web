import { useNavigate, useParams } from "react-router-dom";

import { useListTasksQuery } from '../tasksSlice';

import { TaskForm } from '../TaskForm/TaskForm'

import { TasksEmptyState } from "./TasksEmptyState"

import { ListTab } from "../../../components/tab/ListTab";
import { Assignee } from "../Assignee";

export const TasksList = ({ dialogRef }) => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListTasksQuery({})

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            const taskId = event.target.dataset['taskId']
            navigate(`/cases/${caseId}?task=${taskId}`)
        }
    }

    const clickHandler = async event => {
        event.preventDefault()
        const taskId = event.target.parentElement.dataset['taskId']
        navigate(`?task=${taskId}`)
    }

    const headers = ["Title", "Assignee", "Deadline", "Status"]

    const listHeaders = headers.map(header => <div className="basis-1/4" key={header}>{header}</div>)

    let listRows

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (isSuccess) {
        listRows = tasks.map(task => (
            <div key={task.id}
                tabIndex={0}
                className="hover:bg-slate-100 py-2"
                data-task-id={task.id}
                onKeyDown={e => keyDownHandler(e, task.id)}
            >
                <a className="flex"
                    // onKeyDown={e => keyDownHandler(e, task)}
                    data-task-id={task.id}
                    onClick={clickHandler}
                    href={`/cases/${caseId}?view=/tasks/${task.id}`}
                >
                    <div className="basis-1/4">{task.title}</div>
                    <Assignee clientId={task.clientID}
                              lawyerId={task.lawyerID}
                              assignee={task.assignee}
                              className="basis-1/4 capitalize"/>
                    <div className="basis-1/4">{task.deadline || "None provided"}</div>
                    <div className="basis-1/4">{task.status}</div>
                </a>
            </div>
        ))
    }

    return (
        <ListTab
            dialogRef={dialogRef}
            listHeaderClassName="flex border-b border-black"
            listHeaders={listHeaders}
            listBodyClassName=""
            listRows={listRows}
            ResourceForm={TaskForm}
            ResourceEmptyState={TasksEmptyState}
        />
    )
}