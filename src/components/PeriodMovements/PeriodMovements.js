import React from 'react';
import { MOVEMENT_TYPES } from '../../constants';
import Income from '../Income/Income';
import Expense from '../Expense/Expense';
import './PeriodMovements.css';

const PeriodMovements = ({movements}) => {
    const incomes = movements.filter(m => m.movementType === MOVEMENT_TYPES.INCOME);
    const expenses = movements.filter(m => m.movementType === MOVEMENT_TYPES.EXPENSE);
    
    return (
        <ul className='period-movements'>
        {incomes.map((income, index) =>
            <Income key={`income-${index}`} movement={income} />
        )}
        {expenses.map((expense, index) =>
            <Expense key={`expense-${index}`} movement={expense} />
        )}
        </ul>
    );
};
export default PeriodMovements;

