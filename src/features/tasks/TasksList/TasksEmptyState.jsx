export const TasksEmptyState = ({ openDialog }) => (
    <div className="flex flex-col justify-items-center items-center">
            <h2>You have don't have any tasks yet.</h2>
            <p>Would you like to add a new one?</p>
            <button onClick={openDialog}
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
            >Add New Task</button>
        </div>
)