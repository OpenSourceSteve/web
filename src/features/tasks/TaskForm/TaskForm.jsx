import { forwardRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useListLawyersQuery } from '../../lawyers/lawyersSlice'
import {
    useCreateTaskMutation,
    useUpdateTaskMutation
} from "../tasksSlice"

import {
    Button,
    DatetimeInput,
    SelectInput,
    TextInput
} from '../../../components'

import { logger } from '../../../utils'

import { taskAttributes } from './taskAttributes'

export const TaskForm = forwardRef(({ caseID, onToggleForm, resource: task }, ref) => {
    const Logger = logger()

    const clientId = useSelector(state => state.clients.clientId)

    const initialState = {
        title: "",
        description: "",
        deadline: "",
        caseID: "",
        assignee: ""
    }

    const [taskState, setTaskState] = useState(initialState)

    const [isLoading, setIsLoading] = useState(false)

    const {
        data: lawyers,
        isLawyersLoading,
        isSuccess,
        isError,
        error
    } = useListLawyersQuery({})

    useEffect(() => {
        if (task) {
            setTaskState(task)
        } else {
            setTaskState({
                ...taskState,
                caseID
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [task, caseID])

    const [createTask, { isError: isCreateError, error: createError }] = useCreateTaskMutation()
    const [updateTask, { isError: isUpdateError, error: updateError }] = useUpdateTaskMutation()

    const assigneeOptionsArray = [
        { value: "LAWYER", label: "Lawyer" },
        { value: "CLIENT", label: "Client" }
    ]

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target
        setTaskState({
            ...taskState,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const assigneeChangeHandler = ({ target }) => {
        setTaskState({
            ...taskState,
            assignee: target.value
        })
    }

    const setError = (error, verb) => {
        // const message = error.message.split(":")[0]
        const { message } = error
        setTaskState({
            ...taskState,
            error: { submit: message }
        })
        Logger.error(`${verb} task`, error);
    }

    const submitAndReset = async () => {
        setIsLoading(true)
        const taskObj = {}
        taskAttributes.forEach(attribute => {
            taskObj[attribute] = taskState[attribute]
        })
        taskObj["lawyerID"] = lawyers[0].id;
        taskObj["clientID"] = clientId;
        if (taskObj["deadline"] === "") {
            taskObj["deadline"] = undefined
        } else {
            taskObj["deadline"] += ":00.000Z"
        }
        taskObj["caseID"] = caseID
        taskObj["isAssigneeComplete"] = false
        taskObj["isVerifiedComplete"] = false
        if (taskState.assignee === "LAWYER") {
            taskObj["assignee"] = lawyers[0].id;
        } else if (taskState.assignee === "CLIENT") {
            taskObj["assignee"] = clientId;
        }

        if (task) {
            try {
                await updateTask({ input: taskObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setTaskState(initialState)
            } catch (error) {
                setError(error, "updating")
            }
        } else {
            try {
                await createTask({ input: taskObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setTaskState(initialState)
            } catch (error) {
                setError(error, "creating")
                setIsLoading(false)
            }
        }
    }

    const closeModal = () => {
        onToggleForm()
        setTaskState(initialState)
    }

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">{task ? "Update" : "Create"} Task</div>
                <button className="" onClick={closeModal}>X</button>
            </div>
            <form method="dialog">
                <div className="mb-8">
                    <TextInput name="title" label="Title" state={taskState} changeHandler={changeHandler} />
                </div>
                <div className="mb-8">
                    <SelectInput name="assignee" label="Assignee" state={taskState} changeHandler={assigneeChangeHandler} options={assigneeOptionsArray} defaultOption={{ label: "Please choose assignee", value: "" }} />
                </div>
                <div className="mb-4">
                    <DatetimeInput name="deadline" label="Deadline" state={taskState} changeHandler={changeHandler} />
                </div>
                <div className="mb-4">
                    <TextInput name="description" label="Description" state={taskState} changeHandler={changeHandler} />
                </div>
            </form>
            <div className="">
                <div>
                    <Button isLoading={isLoading}>
                        <button type="button"
                            className={`
                                mt-4
                                px-4 py-2
                                rounded
                                bg-blue-500 hover:bg-blue-400
                                text-white font-semibold text-center
                                block
                                focus:outline-none
                                focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                                cursor-pointer
                            `}
                            onClick={submitAndReset} >Submit</button>
                        <button type="button"
                            className="mt-4 px-4 py-2"
                            onClick={closeModal} >Cancel</button>
                    </Button>
                    <div className="text-red-500 font-bold">{taskState.error?.submit}</div>
                </div>

            </div>
        </dialog>
    )
})