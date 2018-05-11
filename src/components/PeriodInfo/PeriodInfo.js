import React from 'react';

import IncomeSummary from '../IncomeSummary/IncomeSummary';
import ExpenseSummary from '../ExpenseSummary/ExpenseSummary';

import './PeriodInfo.css';

const PeriodInfo = ({
    incomes = 0,
    expenses = 0
}) => {
    debugger;
    return (
        <div className='period-info'>
            <IncomeSummary incomes={incomes} />
            <ExpenseSummary expenses={expenses} />
        </div>
    );
};

export default PeriodInfo;