import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { ListTableTableHeader } from "./ListTabTableHeader";
import { ListTableTableBody } from "./ListTabTableBody";

export const ListTab = ({
    dialogRef,
    listHeaderClassName,
    listHeaders,
    listBodyClassName,
    listRows,
    ResourceForm,
    ResourceEmptyState
}) => {
    const [resource, setResource] = useState(undefined)

    const params = useParams();
    const { caseId } = params;

    const toggleDialog = () => {
        if (dialogRef.current.open) {
            dialogRef.current.close()
            setResource(undefined)
        } else {
            dialogRef.current.showModal()
        }
    }

    useEffect(() => {
        if (resource) {
            toggleDialog()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource])

    if (!listRows) {
        return <div className="w-full h-full flex flex-col justify-center items-center">Loading...</div>
    }
    else {
        if (listRows.length === 0) {
            return (
                <>
                    <ResourceEmptyState openDialog={toggleDialog} />
                    <ResourceForm
                        ref={dialogRef}
                        caseID={caseId}
                        onToggleForm={toggleDialog}
                        event={undefined}
                    />
                </>
            )
        }

        return (
            <>
                <div className="p-4">
                    <ListTableTableHeader headerClassName={listHeaderClassName} headers={listHeaders} />
                    <ListTableTableBody bodyClassName={listBodyClassName} listRows={listRows} />
                </div>
                <ResourceForm
                    ref={dialogRef}
                    caseID={caseId}
                    onToggleForm={toggleDialog}
                    resource={resource}
                />
            </>
        )
    }
}