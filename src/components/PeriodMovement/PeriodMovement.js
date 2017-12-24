import React from 'react';
import './PeriodMovement.css';


const PeriodMovement = (props) => {
    const {movement, className='', children} = props;
    return (
        <li className={`period-movement ${className}`}>
            {movement.concept}
            {children}
        </li>
    );
}
export default PeriodMovement;