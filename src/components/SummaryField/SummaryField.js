import React from 'react';
import ReadonlyField from '../ReadonlyField/ReadonlyField';
import CurrencySign from '../CurrencySign/CurrencySign';
import './SummaryField.css';

const SummaryField = ({
    type='',
    className = '',
    total
}) => {
    const lowercaseType = type.toLowerCase(); 
    return (
        <div className={`summary-field summary-${lowercaseType}`}>
            <ReadonlyField defaultValue={type} className={`summary-label label-${lowercaseType}`} name={`summary-${lowercaseType}`} />
            <CurrencySign />
            <ReadonlyField defaultValue={total} className={`summary-label label-${lowercaseType}-value`} name={`summary-${lowercaseType}-value`} />
        </div>
    );
};

export default SummaryField;