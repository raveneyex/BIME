import React from 'react';
import './ReadonlyField.css';

const ReadonlyField = ({
    name = '',
    defaultValue = '',
    className = ''
}) => {
    return (
        <input 
            type="text"
            className={`readonly-field ${className}`}
            name={name}
            defaultValue={defaultValue}
            readOnly={true}/>
    );
};

export default ReadonlyField;
