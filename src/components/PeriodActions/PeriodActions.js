import React from 'react';
import './PeriodActions.css';

const PeriodActions = ({
    addMovement = () => {}
}) => {
    return (
        <div className='period-actions'>
            <span 
                className='action add-movement'
                onClick={addMovement}>
                +
            </span>
        </div>
    );
};

export default PeriodActions;