import React from 'react';
import { MOVEMENT_TYPES } from '../../constants';

import IncomeSummary from '../IncomeSummary/IncomeSummary';
import ExpenseSummary from '../ExpenseSummary/ExpenseSummary';

import './PeriodInfo.css';

const PeriodInfo = ({
    period = {}
}) => {
    const { movements = [] } = period;
    const INCOMES = movements.filter(i => i.movementType === MOVEMENT_TYPES.INCOME);
    const EXPENSES = movements.filter(e => e.movementType === MOVEMENT_TYPES.EXPENSE);
    
    return (
        <div className='period-info'>
            <IncomeSummary incomes={INCOMES} />
            <ExpenseSummary expenses={EXPENSES} />
        </div>
    );
};

export default PeriodInfo;