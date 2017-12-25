import React from 'react';

import './MovementConcept.css';
import EditableField from '../EditableField/EditableField';

const MovementConcept = (props) => {
    const { defaultValue, onBlur = () => {} } = props;
    return (
        <EditableField
            className='movement-concept'
            name='movement-concept'
            defaultValue={defaultValue}
            onBlur={onBlur} />
    );
};

export default MovementConcept;