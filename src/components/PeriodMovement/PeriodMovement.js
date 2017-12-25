import React from 'react';
import MovementConcept from '../MovementConcept/MovementConcept';
import MovementValue from '../MovementValue/MovementValue';

import './PeriodMovement.css';

const PeriodMovement = (props) => {
    const {movement, className='', children} = props;
    return (
        <li className={`period-movement ${className}`}>
            <MovementConcept
                defaultValue={movement.concept}
                className='movement-concept' />
            <MovementValue
                defaultValue={movement.value}
                className='movement-value' />
            {children}
        </li>
    );
}
export default PeriodMovement;