import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';
import './Expense.css';

const Expense = ({movement}) => {
    return (
        <PeriodMovement
            type={movement.movementType}
            className='period-expense' 
            movement={movement}>
            <div className="status">Status: {movement.status}</div>
        </PeriodMovement>
    );
};
export default Expense;

