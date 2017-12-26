import React from 'react';

import './MovementConcept.css';
import EditableField from '../EditableField/EditableField';

const MovementConcept = ({
    defaultValue = '',
    changeConcept = () => {}
}) => {
    const onChangeConcept = (event) => {
        let value  = event.target.value;
        changeConcept(value);
    };

    return (
        <EditableField
            name='movement-concept'
            className='movement-concept'
            defaultValue={defaultValue}
            onBlur={onChangeConcept} />
    );
};

export default MovementConcept;