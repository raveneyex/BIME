import React from 'react';
import Period from './Period.js';

const PeriodList = ({periods, changePeriod}) => {
    debugger;
    return (
        <ul className="periods">
            {periods.map((period, index) =>
                <Period key={index} {...period} onClick={() => {changePeriod(period.id)} } />
            )}
        </ul>
    );
};

export default PeriodList;