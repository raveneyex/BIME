import React from 'react';
import PeriodTitle from '../PeriodTitle/PeriodTitle';
import PeriodDates from '../PeriodDates/PeriodDates';
import MovementList from '../Movements/MovementList.js';
import ExpandableData from '../ExpandableData/ExpandableData.js';

import './Period.css';


const Period = (props) => {
    const { period, changeStartDate, changeEndDate, changeName } = props;
    const { name, startDate, endDate, movements } = period;
    const ID = period.id;
    
    const onNameChange = (event) => {
        const value = event.target.value;
        changeName(ID, value);
    };

    const onStartDateChange = (event) => {
        const value = event.target.value;
        changeStartDate(ID, value);
    };

    const onEndDateChange = (event) => {
        const value = event.target.value;
        changeEndDate(ID, value);
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
                <MovementList movements={movements} />
                <ExpandableData period={period} />
            </form>
        </div>
    )
};
export default Period;