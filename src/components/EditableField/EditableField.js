import React from 'react';
import './EditableField.css';

const EditableField = ({
    name = '',
    defaultValue = '',
    className = '',
    onBlur = () => {}
}) => {
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
