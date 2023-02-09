import React from 'react';

function Select({ options, firstOption, ...props }) {
    return (
        <select {...props}>
            <option value="0">{firstOption}</option>
            {options.map((item, index) => (
                <option
                    key={index}
                    value={typeof item === 'string' ? item.toLowerCase() : item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
}

export default Select;
