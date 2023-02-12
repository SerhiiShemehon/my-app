function Select({ options, firstOption, ...props }) {
    return (
        <select {...props}>
            <option value="0">{firstOption}</option>
            {options.map((item) => (
                <option
                    key={item}
                    value={typeof item === 'string' ? item.toLowerCase() : item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
}

export default Select;
