import React from 'react';
import EditableField from '../EditableField/EditableField';

import './MovementValue.css';

const MovementValue = ({
    className = 'movement-value',
    defaultValue = '',
    changeValue = () => {}
}) => {
    
    const onChangeValue = (event) => {
        let value = event.target.value;
        changeValue(value);
    };

    return (
        <div className={`movement-value ${className}`}>
            <input
                className='currency-sign'
                type="text"
                readOnly={true}
                value='$' />
            <EditableField
                className='movement-value_input'
                name='movement-value'
                defaultValue={defaultValue}
                onBlur={onChangeValue} />
        </div>
    );
};
export default MovementValue;