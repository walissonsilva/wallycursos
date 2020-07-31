import React from 'react'

function FormField({label, type, value, name, handleChange}) {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
            />
        </label>
    )
}

export default FormField