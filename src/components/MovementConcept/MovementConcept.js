import React from 'react';

import './MovementConcept.css';
import EditableField from '../EditableField/EditableField';

const MovementConcept = (props) => {
    const { defaultValue, changeConcept = () => {} } = props;

    const onChangeConcept = (event) => {
        let value  = event.target.value;
        changeConcept(value);
    };

    return (
        <EditableField
            className='movement-concept'
            name='movement-concept'
            defaultValue={defaultValue}
            onBlur={onChangeConcept} />
    );
};

export default MovementConcept;