import React from 'react';
import './MovementStatus.css';

const MovementStatus = (props) => {
    const { status, toggleStatus = () => {} } = props;
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