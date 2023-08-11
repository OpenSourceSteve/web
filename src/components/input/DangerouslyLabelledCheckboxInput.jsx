export const DangerouslyLabelledCheckboxInput = ({name, label, changeHandler, state}) => {
    return (
        <div className="relative">
            <input type="checkbox"
                id={name}
                name={name}
                value={state[name]}
                onChange={changeHandler}
            />
            <label className="inline ml-2" htmlFor={name} dangerouslySetInnerHTML={{__html: label}} />
            <div className="text-red-500">{state.error?.[name]}</div>
        </div>
    )
}