import { PotentialClients } from './PotentialClients'

export const ClientSelector = ({ clientHandler, clientName, clientNameChangeHandler, debounced }) => {
    return (
        <div className="relative">
            <input type="text"
                className="peer w-full h-10 border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-slate-600"
                id="clientName"
                name="clientName"
                autoComplete='off'
                value={clientName}
                onChange={clientNameChangeHandler}
                placeholder="clientName"
            />
            <label htmlFor="clientName" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Client</label>
            {clientName !== "" && debounced && <PotentialClients partialName={clientName} clientHandler={clientHandler} />}
        </div>
    )
}