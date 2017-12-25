import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';
import MovementStatus from '../MovementStatus/MovementStatus';
import './Expense.css';

const Expense = ({movement, toggleStatus}) => {
    return (
        <PeriodMovement
            type={movement.movementType}
            className='period-expense' 
            movement={movement}>
            <MovementStatus
                toggleStatus={() => toggleStatus(movement.id)}
                status={movement.status} />
        </PeriodMovement>
    );
};
export default Expense;

