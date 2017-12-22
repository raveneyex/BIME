import React from 'react';
import MovementList from '../Movements/MovementList.js';
import ExpandableData from '../ExpandableData/ExpandableData.js';


const Period = (period) => {
    const { name, startDate, endDate, movements } = period;
    
    return (
        <div className="period">
            <h2 className="period-title">{name}</h2>
            <div className="period-dates">
                <span className="startDate">{startDate}</span>
                <span className="endDate">{endDate}</span>
            </div>
            <MovementList movements={movements} />
            <ExpandableData {...period} />
        </div>
    )
};
export default Period