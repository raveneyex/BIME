import React from 'react';
import PeriodInfo from './PeriodInfo.js';

import './PeriodList.css';

const PeriodList = ({
    periods = [], 
    changePeriod = () => {}
}) => {

    return (
        <ul className="periods">
            {periods.map((period, index) =>
                <PeriodInfo key={index}
                    period={period} 
                    onClick={() => changePeriod(period.id) }/>
            )}
        </ul>
    );
};

export default PeriodList;