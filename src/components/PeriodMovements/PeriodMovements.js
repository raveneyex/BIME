import React from 'react';
import { MOVEMENT_TYPES } from '../../constants';
import Income from '../Income/Income';
import Expense from '../Expense/Expense';
import './PeriodMovements.css';

const PeriodMovements = ({movements, toggleStatus, changeValue, changeConcept}) => {
    const incomes = movements.filter(m => m.movementType === MOVEMENT_TYPES.INCOME);
    const expenses = movements.filter(m => m.movementType === MOVEMENT_TYPES.EXPENSE);
    
    return (
        <ul className='period-movements'>
        {incomes.map((income, index) =>
            <Income
                key={`income-${index}`} 
                movement={income}
                changeValue={changeValue}
                changeConcept={changeConcept}  />
        )}
        {expenses.map((expense, index) =>
            <Expense 
                key={`expense-${index}`} 
                movement={expense} 
                toggleStatus={toggleStatus}
                changeValue={changeValue}
                changeConcept={changeConcept} />
        )}
        </ul>
    );
};
export default PeriodMovements;

