import { useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import styles from "./Tab.module.css"
import { DetailsTabHeader } from "./DetailsTabHeader"

export const DetailsTab = ({
    resourceName,
    resource,
    ResourceForm,
    title,
    resourceDetailContent,
    isLoading,
    isSuccess,
    isError,
    error
}) => {
    const navigate = useNavigate()
    const location = useLocation()

    const dialogRef =useRef(null)

    const backHandler = event => {
        event.preventDefault()
        navigate(location.pathname)
    }

    const toggleResourceForm = () => {
        if (dialogRef.current.open) {
            dialogRef.current.close()
        } else {
            dialogRef.current.showModal()
        }
    }

    let content

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isSuccess) {
        const { pathname } = location;
        content = (
            <>
                <div className={styles.detailsTab}>
                    <DetailsTabHeader backHandler={backHandler}
                                      pathname={pathname}
                                      title={title}
                                      toggleResourceForm={toggleResourceForm}
                                      resourceName={resourceName}
                    />
                    {resourceDetailContent}
                </div>
                <ResourceForm
                    ref={dialogRef}
                    onToggleForm={toggleResourceForm}
                    resource={resource}
                />
            </>
        )
    } else if (isError) {
        content = <div>{JSON.stringify(error)}</div>
    }
    return content
}