import React from 'react';
import './EditableField.css';

const EditableField = (props) => {
    const { name, onBlur, defaultValue, className } = props;
    return (
        <input 
            type="text"
            className={`editable-field ${className}`}
            name={name}
            onBlur={onBlur}
            defaultValue={defaultValue}/>

    );
};

export default EditableField;
