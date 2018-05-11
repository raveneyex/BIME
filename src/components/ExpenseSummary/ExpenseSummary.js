import React from 'react';
import SummaryField from '../SummaryField/SummaryField';
import { MOVEMENT_TYPES } from '../../constants';

import './ExpenseSummary.css';

const ExpenseSummary = ({
    expenses = 0
}) => {
    return (
        <SummaryField
            type={MOVEMENT_TYPES.EXPENSE}
            className='expense-summary'
            total={expenses} />
    );
};

export default ExpenseSummary;