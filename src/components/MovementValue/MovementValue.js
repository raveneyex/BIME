import React from 'react';
import EditableField from '../EditableField/EditableField';

import './MovementValue.css';

const MovementValue = (props) => {
    const { defaultValue, onBlur = () => {} } = props;
    return (
        <div className='movement-value'>
            <input
                className='currency-sign'
                type="text"
                readOnly={true}
                value='$' />
            <EditableField
                className='movement-value_input'
                name='movement-value'
                defaultValue={defaultValue}
                onBlur={onBlur} />
        </div>
    );
};
export default MovementValue;