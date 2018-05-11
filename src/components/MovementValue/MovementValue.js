import React from 'react';
import EditableField from '../EditableField/EditableField';
import CurrencySign from '../CurrencySign/CurrencySign';

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
            <CurrencySign />
            <EditableField
                className='movement-value_input'
                name='movement-value'
                defaultValue={defaultValue}
                onBlur={onChangeValue} />
        </div>
    );
};
export default MovementValue;