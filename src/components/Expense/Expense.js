import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';
import MovementStatus from '../MovementStatus/MovementStatus';
import './Expense.css';

const Expense = ({movement, toggleStatus, changeValue, changeConcept}) => {
    const onChangeValue = (id) => (value) => {
        changeValue(id, value);
    };

    const onChangeConcept = (id) => (concept) => {
        changeConcept(id, concept);
    };
    
    return (
        <PeriodMovement
            type={movement.movementType}
            className='period-expense' 
            movement={movement}
            changeValue={onChangeValue(movement.id)}
            changeConcept={onChangeConcept(movement.id)}>
            <MovementStatus
                toggleStatus={() => toggleStatus(movement.id)}
                status={movement.status} />
        </PeriodMovement>
    );
};
export default Expense;

