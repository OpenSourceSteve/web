export const SelectInput = ({ name, label, state, changeHandler, options, defaultOption }) => {
    return (
        <div className="relative">
            <select id={name} name={name} onChange={changeHandler} value={state[name]}>
                <option key="default" value={defaultOption.value}>{defaultOption.label}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <label htmlFor={name} className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{label}</label>
            <div className="text-red-500">{state.error?.[name]}</div>
        </div>
    )
}