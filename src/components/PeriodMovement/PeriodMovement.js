import React from 'react';
import MovementConcept from '../MovementConcept/MovementConcept';
import MovementValue from '../MovementValue/MovementValue';

import './PeriodMovement.css';

const PeriodMovement = (props) => {
    const {movement, className='', children, changeValue, changeConcept} = props;
    return (
        <li className={`period-movement ${className}`}>
            <MovementConcept
                defaultValue={movement.concept}
                className='movement-concept'
                changeConcept={changeConcept} />
            <MovementValue
                defaultValue={movement.value}
                className='movement-value'
                changeValue={changeValue} />
            {children}
        </li>
    );
}
export default PeriodMovement;