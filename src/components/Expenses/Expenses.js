import React from 'react';
import Expense from '../Expense/Expense';

const Expenses = ({expenses}) => {
    return (
        <li className='period-movement'>
        {expenses.map((expense, index) => 
            <Expense key={`period-income_${index}`} expense={expense} />
        )}
        </li>
    );
};
export default Expenses;