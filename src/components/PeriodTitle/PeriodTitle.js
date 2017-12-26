import React from 'react';
import EditableField from '../EditableField/EditableField';
import './PeriodTitle.css';

const PeriodTitle = ({
    defaultValue,
    onBlur = () => {}
}) => {
    return (
        <EditableField
            className='period-title'
            name='period-title'
            defaultValue={defaultValue}
            onBlur={onBlur}
        />
    );
};

export default PeriodTitle