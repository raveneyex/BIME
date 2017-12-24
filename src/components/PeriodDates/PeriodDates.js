import React from 'react';
import EditableField from '../EditableField/EditableField';

import './PeriodDates.css';

const PeriodDates = (props) => {
    const {startDate, endDate, onStartDateChange, onEndDateChange } = props;

    return (
        <div className='period-dates'>
            <EditableField
                className='period-start_date'
                name='startDate'
                defaultValue={startDate}
                onBlur={onStartDateChange}
            />
            <EditableField
                className='period-end_date'
                name='endDate'
                defaultValue={endDate}
                onBlur={onEndDateChange}
            />
        </div>
    );
};

export default PeriodDates;