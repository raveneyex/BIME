import React from 'react';
import './MovementStatus.css';

const MovementStatus = ({
    status = '',
    toggleStatus = () => {}
}) => {
    const lowercaseStatus = status.toLowerCase();

    return (
        <div className='movement-status'>
            <span 
                className={`status-badge status-${lowercaseStatus}`}
                onClick={() => toggleStatus()}>
                { lowercaseStatus }
            </span>
        </div>
    );
};
export default MovementStatus;