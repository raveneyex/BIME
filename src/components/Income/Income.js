import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';

import './Income.css';

const Income = ({
    movement = {}, 
    changeValue = () => {}, 
    changeConcept = () => {}
}) => {
    const { movementType, id, status } = movement;

    const onChangeValue = (id) => (value) => {
        changeValue(id, value);
    };

    const onChangeConcept = (id) => (concept) => {
        changeConcept(id, concept);
    };

    return (
        <PeriodMovement
            type={movementType}
            className='period-income' 
            movement={movement} 
            changeValue={onChangeValue(id)}
            changeConcept={onChangeConcept(id)}/>
    );
};
export default Income;