export const CheckboxInput = ({name, label, changeHandler, state}) => {
    return (
        <div className="relative">
            <input type="checkbox"
                id={name}
                name={name}
                checked={state[name]}
                onChange={changeHandler}
            />
            <label className="inline ml-2" htmlFor={name}>{label}</label>
            <div className="text-red-500">{state.error?.[name]}</div>
        </div>
    )
}