import { useNavigate, useParams } from "react-router-dom";

import { useListNotesQuery } from '../notesSlice';

import { NoteForm } from '../NoteForm/NoteForm'

import { NotesEmptyState } from "./NotesEmptyState"

import { noteTypeMap } from "../noteTypeMap";

import { ListTab } from "../../../components/tab/ListTab";

export const NotesList = ({ dialogRef }) => {
    const navigate = useNavigate()

    const params = useParams();
    const { caseId } = params;

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useListNotesQuery({})

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            const noteId = event.target.dataset['noteId']
            navigate(`/cases/${caseId}?note=${noteId}`)
        }
    }

    const clickHandler = async event => {
        event.preventDefault()
        const noteId = event.target.parentElement.dataset['noteId']
        navigate(`?note=${noteId}`)
    }

    const headers = ["Timestamp", "Note Type", "Text"]

    const listHeaders = headers.map(header => <div className="basis-1/3" key={header}>{header}</div>)

    let listRows

    if (isSuccess) {
        listRows = notes.map(note => {

            return (
                <div key={note.id}
                    tabIndex={0}
                    className="hover:bg-slate-100 py-2"
                    data-note-id={note.id}
                    onKeyDown={e => keyDownHandler(e, note.id)}
                >
                    <a className="flex"
                        // onKeyDown={e => keyDownHandler(e, note)}
                        data-note-id={note.id}
                        onClick={clickHandler}
                        href={`/cases/${caseId}?view=/notes/${note.id}`}
                    >
                        <div className="basis-1/3">{note.timestamp}</div>
                        <div className="basis-1/3">{noteTypeMap[note.type] || ""}</div>
                        <div className="basis-1/3">{note.text || ""}</div>
                    </a>
                </div>
            )
        })
    }

    return (
        <ListTab
            dialogRef={dialogRef}
            listHeaderClassName="flex border-b border-black"
            listHeaders={listHeaders}
            listBodyClassName=""
            listRows={listRows}
            ResourceForm={NoteForm}
            ResourceEmptyState={NotesEmptyState} />
    )
}