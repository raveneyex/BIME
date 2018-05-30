import React from 'react';
import PeriodList from '../PeriodList/PeriodList';
import Period from '../Period/Period';
import Navigation from '../Navigation/Navigation';
import './App.css';

const App = ({
    periods = [],
    currentPeriod = '',
    switchCurrentPeriod = () => {},
    editStartDate = () => {},
    editEndDate = () => {},
    editName = () => {},
    toggleStatus = () => {},
    toggleType = () => {},
    editValue = () => {},
    editConcept = () => {},
    addMovement = () => {}
}) => {
    const period = currentPeriod 
        ? periods.find(p => p.id === currentPeriod) 
        : null;
        
    return (
        <div className="app">
            <Navigation goHome={switchCurrentPeriod} />
        {period
            ? <Period 
                period={period} 
                changeStartDate={editStartDate}
                changeEndDate={editEndDate}
                changeName={editName}
                toggleStatus={toggleStatus}
                toggleType={toggleType}
                changeValue={editValue}
                changeConcept={editConcept}
                addMovement={addMovement} />
            : <PeriodList 
                periods={periods} 
                changePeriod={switchCurrentPeriod} />
        }
        </div>
    );
};

export default App;