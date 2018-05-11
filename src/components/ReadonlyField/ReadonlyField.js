import React from 'react';
import './ReadonlyField.css';

const ReadonlyField = ({
    name = '',
    defaultValue,
    className = ''
}) => {
    return (
        <input 
            type="text"
            className={`readonly-field ${className}`}
            name={name}
            value={defaultValue}
            readOnly
            />
    );
};

export default ReadonlyField;
