import React from 'react';
import EditableField from '../EditableField/EditableField';
import './PeriodTitle.css';

const PeriodTitle = (props) => {
    const { defaultValue, onBlur = () => {}} = props;
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