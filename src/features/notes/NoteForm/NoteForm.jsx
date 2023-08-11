import { forwardRef, useEffect, useState } from 'react'

import {
    useCreateNoteMutation,
    useUpdateNoteMutation
} from "../notesSlice"

import { noteTypeOptions } from "../noteTypeOptions"

import {
    Button,
    SelectInput,
    TextAreaInput
} from '../../../components'

import { logger } from '../../../utils/logger'

// import styles from '../Notes.module.css'

import { noteAttributes } from './noteAttributes'

const Logger = logger()

export const NoteForm = forwardRef(({ caseID, clientId, onToggleForm, eventID, taskID, resource: note }, ref) => {

    const initialState = {
        caseID: "",
        type: "",
        text: "",
        timestamp: "",
        eventID: "",
        taskID: ""
    }

    const [noteState, setNoteState] = useState(initialState)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (note) {
            setNoteState(note)
        } else {
            setNoteState({
                ...noteState,
                clientId,
                caseID,
                eventID,
                taskID
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [note, clientId, caseID, eventID, taskID])

    const [createNote, { isError: isCreateError, error: createError }] = useCreateNoteMutation()
    const [updateNote, { isError: isUpdateError, error: updateError }] = useUpdateNoteMutation()

    const changeHandler = ({ target }) => {
        const { checked, name, type, value } = target
        setNoteState({
            ...noteState,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const noteTypeOptionsArray = noteTypeOptions.reduce((prev, curr, currIndex) => {
        const { label, value } = curr
        prev.push({ label, value })
        return prev
    }, [])

    const setError = (error, verb) => {
        // const message = error.message.split(":")[0]
        const { message } = error
        setNoteState({
            ...noteState,
            error: { submit: message }
        })
        Logger.error(`${verb} note`, error);
    }

    const submitAndReset = async () => {
        setIsLoading(true)
        const noteObj = {}
        noteAttributes.forEach(attribute => {
            noteObj[attribute] = noteState[attribute]
        })
        // set timestamp
        const now = new Date()

        noteObj["timestamp"] = now.toISOString()
        noteObj["caseID"] = caseID
        noteObj["eventID"] = eventID
        noteObj["taskID"] = taskID

        if (note) {
            try {
                await updateNote({ input: noteObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setNoteState(initialState)
            } catch (error) {
                setError(error, "updating")
            }
        } else {
            try {
                await createNote({ input: noteObj }).unwrap()
                onToggleForm()
                setIsLoading(false)
                setNoteState(initialState)
            } catch (error) {
                setError(error, "creating")
                setIsLoading(false)
            }
        }
    }

    const closeModal = () => {
        onToggleForm()
        setNoteState(initialState)
    }

    return (
        <dialog ref={ref} className="w-96 p-8 border border-black rounded-lg">
            <div className="flex justify-between mb-8">
                <div className="">{note ? "Update" : "Create"} Note</div>
                <button className="" onClick={closeModal}>X</button>
            </div>
            <form method="dialog">
                <div className="mb-8">
                <SelectInput name="type" label="Note Type" state={noteState} changeHandler={changeHandler} options={noteTypeOptionsArray} defaultOption={{ label: "Please choose note type", value: "" }} />
                </div>
                <div className="mb-4">
                <TextAreaInput name="text" label="Text" state={noteState} changeHandler={changeHandler} />
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
                    <div className="text-red-500 font-bold">{noteState.error?.submit}</div>
                </div>

            </div>
        </dialog>
    )
})