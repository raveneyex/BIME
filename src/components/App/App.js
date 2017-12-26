import React from 'react';
import PeriodList from '../PeriodList/PeriodList';
import Period from '../Period/Period';
import Navigation from '../Navigation/Navigation';
import './App.css';

const App = (props) => {
    const {
        periods, 
        currentPeriod, 
        changePeriod,
        changeStartDate,
        changeEndDate,
        changeName,
        toggleStatus,
        changeValue,
        changeConcept
    } = props;
    const period = currentPeriod 
        ? periods.find(p => p.id === currentPeriod) 
        : null;
        
    return (
        <div className="app">
            <Navigation goHome={changePeriod} />
        {period
            ? <Period 
                period={period} 
                changeStartDate={changeStartDate}
                changeEndDate={changeEndDate}
                changeName={changeName}
                toggleStatus={toggleStatus}
                changeValue={changeValue}
                changeConcept={changeConcept} />
            : <PeriodList 
                periods={periods} 
                changePeriod={changePeriod} />
        }
        </div>
    );
};

export default App;