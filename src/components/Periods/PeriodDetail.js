import React from 'react';
import MovementList from '../Movements/MovementList.js';
import ExpandableData from '../ExpandableData/ExpandableData.js';


const PeriodDetail = (props) => {
    const { period, changeStartDate, changeEndDate, changeName } = props;
    const { name, startDate, endDate, movements } = period;
    const ID = period.id;
    
    const onNameChange = (event) => {
        debugger;
        const value = event.target.value;
        changeName(ID, value);
    };

    const onStartDateChange = (event) => {
        debugger;
        const value = event.target.value;
        changeStartDate(ID, value);
    };

    const onEndDateChange = (event) => {
        debugger;
        const value = event.target.value;
        changeEndDate(ID, value);
    };

    return (
        <div className="period-detail">
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type="text" 
                    className="period-title" 
                    defaultValue={name} 
                    onBlur={onNameChange}/>
                <div className="period-dates">
                    <input 
                        type="text"
                        className="startDate"
                        defaultValue={startDate}
                        onBlur={onStartDateChange} />
                    <input
                        type="text"
                        className="endDate"
                        defaultValue={endDate} 
                        onBlur={onEndDateChange}/>
                </div>
                <MovementList movements={movements} />
                <ExpandableData period={period} />
            </form>
        </div>
    )
};
export default PeriodDetail;