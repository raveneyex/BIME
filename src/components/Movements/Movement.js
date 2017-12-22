import React from 'react';
import {MOVEMENT_TYPES} from '../../constants.js';

const Movement = ({movement}) => {
    let type;
    type = movement.movementType || MOVEMENT_TYPES.INCOME;
    type = type.toLowerCase();
    
    return (
        <li className={`period-movement period-movement__${type}`}>
            <div className="concept">Concept: {movement.concept}</div>
            <div className="value">Value: {movement.value}</div>
            {type === MOVEMENT_TYPES.EXPENSE
                ? <div className="status">Status: {movement.status}</div>
                : null
            }
        </li>
    );
}
export default Movement;