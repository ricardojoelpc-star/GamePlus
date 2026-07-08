function Input({

    type = "text",

    name,

    value,

    placeholder,

    onChange,

    required = false,

    disabled = false

}) {

    return (

        <input

            type={type}

            name={name}

            value={value}

            placeholder={placeholder}

            onChange={onChange}

            required={required}

            disabled={disabled}

        />

    );

}

export default Input;