import React from 'react';
import MovementStatus from '../MovementStatus/MovementStatus';
import MovementConcept from '../MovementConcept/MovementConcept';
import MovementValue from '../MovementValue/MovementValue';

import './PeriodMovement.css';

const PeriodMovement = ({
    movement = {},
    changeConcept = () => {},
    changeValue = () => {},
    toggleStatus = () => {},
    toggleType = () => {}
}) => {
    const { movementType = '', concept = '', value = '', status = '', id } = movement;
    return (
        <li className={`period-movement ${movementType.toLowerCase()}`}>
            <MovementStatus
                type={movementType}
                status={status}
                toggleStatus={() => toggleStatus(id)}
                toggleType={() => toggleType(id)}/>
            <MovementConcept
                defaultValue={concept}
                className='movement-concept'
                changeConcept={changeConcept} />
            <MovementValue
                defaultValue={value}
                className='movement-value'
                changeValue={changeValue} />
        </li>
    );
}
export default PeriodMovement;