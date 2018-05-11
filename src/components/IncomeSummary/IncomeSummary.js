import React from 'react';
import SummaryField from '../SummaryField/SummaryField';
import { MOVEMENT_TYPES } from '../../constants';

import './IncomeSummary.css';

const IncomeSummary = ({
    incomes = 0
}) => {
    return (
        <SummaryField
            type={MOVEMENT_TYPES.INCOME}
            className='income-summary'
            total={incomes} />
    );
};

export default IncomeSummary;