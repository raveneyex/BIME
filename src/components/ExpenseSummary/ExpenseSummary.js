import React from 'react';
import SummaryField from '../SummaryField/SummaryField';
import { MOVEMENT_TYPES } from '../../constants';

import './ExpenseSummary.css';

const ExpenseSummary = ({
    expenses = []
}) => {
    const TOTAL = expenses.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    const NUM_EXPENSES = expenses.length;

    return (
        <SummaryField
            type={MOVEMENT_TYPES.EXPENSE}
            className='expense-summary'
            total={TOTAL}
            num={NUM_EXPENSES} />
    );
};

export default ExpenseSummary;