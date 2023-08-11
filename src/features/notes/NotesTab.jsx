import { useSearchParams } from "react-router-dom"

import { NotesList } from "./NotesList/NotesList"
import { NoteDetails } from "./NoteDetails/NoteDetails"

export const NotesTab = ({ caseInstance, dialogRef }) => {
    const [searchParams] = useSearchParams()
    const noteId = searchParams.get("note")

    if (noteId) {
        return <NoteDetails noteId={noteId} />
    }
    return <NotesList caseInstance={caseInstance} dialogRef={dialogRef} />
}