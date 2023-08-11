import { useGetNoteQuery } from "../notesSlice"

import { NoteForm } from "../NoteForm/NoteForm"

import { noteTypeMap } from "../noteTypeMap"

import { DetailsTab } from "../../../components"

export const NoteDetails = ({ noteId }) => {
    const {
        data: note,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNoteQuery({ id: noteId })

    let content

    if (isSuccess) {
        content = (
            <>
                <div>
                    Timestamp: {note.timestamp}
                </div>
                <div>
                    Note Type: {noteTypeMap[note.type]}
                </div>
                <div>
                    Text: {note.text}
                </div>
            </>
        )
    }

    // return content
    return <DetailsTab resourceName="Note"
        resource={note}
        ResourceForm={NoteForm}
        title={"Note Details"}
        resourceDetailContent={content}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
    />
}