import React from 'react';
import ReadonlyField from '../ReadonlyField/ReadonlyField';
import CurrencySign from '../CurrencySign/CurrencySign';

import './SummaryValue.css';

const SummaryValue = ({
    className = '',
    type,
    defaultValue,
}) => {
    return (
        <div className={`summary-value ${className}`}>
            <CurrencySign />
            <ReadonlyField
                className='summary-value_input'
                name={`summary-value-${type}`}
                defaultValue={defaultValue} />
        </div>
    );
};
export default SummaryValue;