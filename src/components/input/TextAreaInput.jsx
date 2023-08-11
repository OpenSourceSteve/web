export const TextAreaInput = ({name, label, changeHandler, state }) => {
    return (
        <div className="relative">
            <textarea
                id={name}
                className="border border-black w-full"
                name={name}
                autoComplete={name}
                value={state[name]}
                onChange={changeHandler}
            />
            <label htmlFor={name} className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{label}</label>
            <div className="text-red-500">{state.error?.[name]}</div>
        </div>
    )
}