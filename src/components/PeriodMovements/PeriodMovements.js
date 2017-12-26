import React from 'react';
import PeriodMovement from '../PeriodMovement/PeriodMovement';
import { movementTypesSort } from '../../lib/utils';
import './PeriodMovements.css';

const PeriodMovements = ({
    movements = [], 
    toggleStatus = () => {}, 
    changeValue = () => {}, 
    changeConcept = () => {}
}) => {
    const sortedMovements = movements.sort(movementTypesSort);

    const onChangeValue = (id) => (value) => {
        changeValue(id, value);
    };

    const onChangeConcept = (id) => (concept) => {
        changeConcept(id, concept);
    };
    
    return (
        <ul className='period-movements'>
        {sortedMovements.map((movement, index) => 
            <PeriodMovement
                key={index}
                movement={movement}
                toggleStatus={toggleStatus}
                changeConcept={onChangeConcept(movement.id)}
                changeValue={onChangeValue(movement.id)} />
        )}
        </ul>
    );
};
export default PeriodMovements;

