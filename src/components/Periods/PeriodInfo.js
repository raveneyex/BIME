import React from 'react';

const PeriodInfo = ({ period, onClick }) => {
    const { name, startDate, endDate } = period; 
    return (
        <div className="period-info" onClick={onClick}>
            <h2 className="period-title">{name}</h2>
            <div className="period-dates">
                <span className="startDate">{startDate}</span>
                <span className="endDate">{endDate}</span>
            </div>
        </div>
    );
};

export default PeriodInfo;