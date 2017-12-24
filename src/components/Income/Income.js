import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';

import './Income.css';

const Income = ({movement}) => {
    return (
        <PeriodMovement
            type={movement.movementType}
            className='period-income' 
            movement={movement} />
    );
};
export default Income;