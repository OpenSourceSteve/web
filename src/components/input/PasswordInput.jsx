export const PasswordInput = ({name, label, changeHandler, state}) => {
    return (
        <div className="relative">
            <input type="password"
                className="peer w-full h-10 border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-slate-600"
                id={name}
                name={name}
                autoComplete={`current-${name}`}
                value={state[name]}
                onChange={changeHandler}
                placeholder={label}
            />
            <label htmlFor={name} className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{label}</label>
            <div className="text-red-500">{state.error?.[name]}</div>
        </div>
    )
}