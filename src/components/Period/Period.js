import React from 'react';
import PeriodTitle from '../PeriodTitle/PeriodTitle';
import PeriodDates from '../PeriodDates/PeriodDates';
import PeriodMovements from '../PeriodMovements/PeriodMovements.js';
import PeriodInfo from '../PeriodInfo/PeriodInfo.js';
import PeriodActions from '../PeriodActions/PeriodActions';

import './Period.css';


const Period = ({
    period = {}, 
    changeStartDate = () => {}, 
    changeEndDate = () => {}, 
    changeName = () => {}, 
    toggleStatus = () => {},
    toggleType = () => {},
    changeValue = () => {}, 
    changeConcept = () => {},
    addMovement = () => {}
}) => {
    const { name, startDate, endDate, movements, id, incomes, expenses } = period;
    
    const onNameChange = (event) => {
        const value = event.target.value;
        changeName(id, value);
    };

    const onStartDateChange = (event) => {
        const value = event.target.value;
        changeStartDate(id, value);
    };

    const onEndDateChange = (event) => {
        const value = event.target.value;
        changeEndDate(id, value);
    };

    return (
        <div className="period-detail">
            <form onSubmit={e => e.preventDefault()}>
                <PeriodTitle
                    defaultValue={name}
                    onBlur={onNameChange}/>
                <PeriodDates
                    startDate={startDate}
                    endDate={endDate}
                    onStartDateChange={onStartDateChange}
                    onEndDateChange={onEndDateChange} />
                <PeriodActions
                    addMovement={addMovement} />
                <PeriodMovements 
                    movements={movements}
                    toggleStatus={toggleStatus}
                    toggleType={toggleType}
                    changeValue={changeValue}
                    changeConcept={changeConcept} />
                <PeriodInfo 
                    incomes={incomes}
                    expenses={expenses} />
            </form>
        </div>
    )
};
export default Period;