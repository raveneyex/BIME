import React from 'react';
import MovementValue from '../MovementValue/MovementValue';
import ReadonlyField from '../ReadonlyField/ReadonlyField';

import './SummaryField.css';

const SummaryField = ({
    type='',
    className = '',
    num = 0,
    total = 0
}) => {
    const lowercaseType = type.toLowerCase(); 
    return (
        <div className={`summary-field ${className}`}>
            <ReadonlyField defaultValue={type} className={`summary-label label-${lowercaseType}`} name={`summary-${lowercaseType}`} />
            <MovementValue defaultValue={total} className={`summary-total-value total-value-${lowercaseType}`} />
        </div>
    );
};

export default SummaryField;