export const TextInput = ({ name, label, changeHandler, state, disabled }) => (
    <div className="relative">
        <input type="text"
            className={`peer w-full h-10 border-b-2 ${disabled ? "border-slate-300" : "border-gray-400"} text-gray-900 placeholder-transparent focus:outline-none focus:border-slate-600`}
            id={name}
            name={name}
            autoComplete={name}
            value={state[name]}
            onChange={changeHandler}
            placeholder={label}
            disabled={disabled}
        />
        <label htmlFor={name} className={`absolute left-0 -top-3.5 ${disabled ? "text-slate-300" : "text-gray-600"} text-sm transition-all peer-placeholder-shown:text-base ${disabled ? "text-slate-300" : "peer-placeholder-shown:text-gray-500"}  peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`}>{label}</label>
        <div className="text-red-500">{state.error?.[name]}</div>
    </div>
)