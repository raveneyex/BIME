import React from 'react';
import { MOVEMENT_TYPES } from '../../constants';
import './MovementStatus.css';

const MovementStatus = ({
    type = '',
    status = '',
    toggleType = () => {},
    toggleStatus = () => {}
}) => {
    const lowercaseStatus = status.toLowerCase();
    const lowercaseType = type.toLowerCase();
    const StatusItem = type === MOVEMENT_TYPES.INCOME
        ? null
        : <span 
            className={`status-badge status-${lowercaseStatus}`}
            onClick={() => toggleStatus()}>
            { lowercaseStatus }
        </span>;

    return (
        <div className='movement-status'>
            {StatusItem}
            <span
                title={lowercaseType}
                className={`type-badge type-${lowercaseType}`}
                onClick={() => toggleType()}>&nbsp;</span>
        </div>
    );
};
export default MovementStatus;