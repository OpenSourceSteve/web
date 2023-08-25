import { useState } from "react"

import { Button } from "../../../components"

export const ClientDetails = ({ client, toggleFormDialog, deleteClient }) => {
    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <div className="flex w-full px-8">
            <div className="basis-1/2">
                <div className="">
                    <p>DOB: {client.dateOfBirth}</p>
                </div>
                <div className="mt-4">
                    <h2 className="underline">Contact Info</h2>
                    <p>Phone: {client.phone}</p>
                    <p>Email: {client.email}</p>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="">
                    <h2 className="underline">Address</h2>
                    <p>{client.address1}</p>
                    {client.address2 && <p>{client.address2}</p>}
                    <p>{client.city}, {client.state}  {client.zip}</p>
                </div>
                <div className="mt-4">
                    <p>Referral Source: {client.referralSource}</p>
                </div>
                <button onClick={toggleFormDialog}
                    className={`
                    mt-4
                    px-4 py-2
                    rounded
                    bg-blue-500 hover:bg-blue-400
                    text-white font-semibold text-center
                    focus:outline-none
                    focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                    cursor-pointer
                `}
                    tabIndex={0}
                    type="button"
                >Update Client Info</button>
                <Button isLoading={isDeleting}>
                    <button onClick={() => deleteClient(setIsDeleting)}
                        className={`
                            mt-4 ml-4
                            px-4 py-2
                            rounded
                            bg-red-500 hover:bg-red-400
                            text-white font-semibold text-center
                            focus:outline-none
                            focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
                            cursor-pointer
                        `}
                        tabIndex={0}
                        type="button"
                    >Delete Client</button>
                </Button>
            </div>
        </div>
    )
}