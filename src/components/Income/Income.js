import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';

import './Income.css';

const Income = ({movement, changeValue, changeConcept}) => {
    const onChangeValue = (id) => (value) => {
        changeValue(id, value);
    };

    const onChangeConcept = (id) => (concept) => {
        changeConcept(id, concept);
    };
    return (
        <PeriodMovement
            type={movement.movementType}
            className='period-income' 
            movement={movement} 
            changeValue={onChangeValue(movement.id)}
            changeConcept={onChangeConcept(movement.id)}/>
    );
};
export default Income;