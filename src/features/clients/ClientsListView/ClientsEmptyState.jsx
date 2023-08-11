export const ClientsEmptyState = ({ openModal }) => (
    <div className="flex flex-col p-8 items-center">
        <h1 className="mb-4">Clients</h1>
        <h2 className="">You have don't have any clients yet.</h2>
        <p className="mb-8">Would you like to add a new one?</p>
        <button className={`
              px-4 py-2
              rounded
              bg-blue-500 hover:bg-blue-400
              text-white font-semibold text-center
              block
              focus:outline-none
              focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80
              cursor-pointer
          `}
          type="button"
          onClick={openModal}
        >Add New Client</button>
    </div>
)
