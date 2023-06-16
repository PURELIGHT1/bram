
import React, { useState } from 'react'
import { classNames } from '../utils/helpers/classNames'

const TextField = React.forwardRef((props, ref) => {
    const {
        name,
        type = 'text',
        placeholder,
        size = 'base',
        typeCustom = false,
        addstyle,
        icon,
    } = props;
    const [inputType, setInputType] = useState(type);
    const InputElement = typeCustom ? 'textarea' :'input';

    return (
        <div className={classNames('relative', addstyle)}>
            <InputElement
                {...props}
                type={inputType}
                className={`form-control block w-full px-4 py-2 text-${size} font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                placeholder={placeholder || name}
                name={name}
                ref={ref}
            />
            {icon && <div className="absolute right-3 top-3">{icon}</div>}
        </div>
    );
});

export default TextField;
