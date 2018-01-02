import React from 'react';
import SummaryField from '../SummaryField/SummaryField';
import { MOVEMENT_TYPES } from '../../constants';

import './IncomeSummary.css';

const IncomeSummary = ({
    incomes = []
}) => {
    const TOTAL = incomes.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.value, 10), 0);
    const NUM_INCOMES = incomes.length;
    
    return (
        <SummaryField
            type={MOVEMENT_TYPES.INCOME}
            total={TOTAL}
            num={NUM_INCOMES} />
    );
};

export default IncomeSummary;