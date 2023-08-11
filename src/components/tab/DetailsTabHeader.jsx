import { Link } from "../link"

export const DetailsTabHeader = ({ backHandler, pathname, title, toggleResourceForm, resourceName }) => {
    return (
        <div className="flex justify-between items-center">
            <Link path={`${pathname}`} text={`Back to ${resourceName}s List`} onClick={backHandler} color="blue-500" />
            <h2>{title}</h2>
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
                onClick={toggleResourceForm}>Update {resourceName}</button>
        </div>
    )
}