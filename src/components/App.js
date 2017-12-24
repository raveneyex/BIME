import React from 'react';
import PeriodList from './Periods/PeriodList';
import PeriodDetail from './Periods/PeriodDetail';

const App = (props) => {
    const {
        periods, 
        currentPeriod, 
        changePeriod,
        changeStartDate,
        changeEndDate,
        changeName
    } = props;
    const period = currentPeriod 
        ? periods.find(p => p.id === currentPeriod) 
        : null;
        
    return (
        <div className="app">
        {period
            ? <PeriodDetail period={period} 
                changeStartDate={changeStartDate}
                changeEndDate={changeEndDate}
                changeName={changeName} />
            : <PeriodList periods={periods} 
                changePeriod={changePeriod} />
        }
        </div>
    );
};

export default App;