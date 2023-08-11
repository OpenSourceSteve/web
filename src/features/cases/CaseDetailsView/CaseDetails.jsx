import { useDispatch } from "react-redux"

import { setClientId } from "../../clients/clientsSlice"

export const CaseDetails = ({caseInstance, dialogRef, toggleFormDialog}) => {
    const dispatch = useDispatch()

    const { firstName, lastName, id: clientId } = caseInstance.Clients.items[0].client

    dispatch(setClientId(clientId))

    const { jurisdiction, court, judge, prosecutor} = caseInstance

    return (
        <div className="flex w-full px-8">
            <div className="basis-1/2">
                <div className="mt-2">Client: {firstName} {lastName}</div>
                <div className="mt-2">Jurisdiction: {jurisdiction}</div>
                <div className="mt-2">Court: {court}</div>
                <div className="mt-2">Judge: {judge}</div>
                <div className="mt-2">Prosecutor: {prosecutor}</div>
            </div>
            <div className="basis-1/2">
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
                    onClick={() => toggleFormDialog(dialogRef)}
                    data-form="case"
                >Update Case Info</button>
            </div>
        </div>
    )
}