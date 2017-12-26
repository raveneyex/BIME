import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';
import './Expense.css';

const Expense = ({
    movement = {}, 
    toggleStatus = () => {}, 
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
            className='period-expense' 
            movement={movement}
            changeValue={onChangeValue(id)}
            changeConcept={onChangeConcept(id)} />
    );
};
export default Expense;

