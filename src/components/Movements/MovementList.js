import React from 'react';
import { MOVEMENT_TYPES } from '../../constants.js';
import Movement from './Movement.js';

const MovementList = ({movements}) => {
    const expenses = movements.filter(m => m.movementType === MOVEMENT_TYPES.EXPENSE);
    const incomes = movements.filter(m => m.movementType === MOVEMENT_TYPES.INCOME);
    
    return (
        <ul className="period-movements">
            {incomes.map((income, index) =>
                <Movement key={index} movement={income} />
            )}
            {expenses.map((expense, index) =>
                <Movement key={index} movement={expense} />
            )}
        </ul>
    );
};
export default MovementList;

