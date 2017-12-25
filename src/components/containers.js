import { connect } from 'react-redux';
import App from './App/App.js';
import { 
    switchCurrentPeriod, 
    editStartDate, 
    editEndDate, 
    editName,
    toggleStatus
} from '../redux/actionCreators.js';

export const AppContainer = connect(
    (state) => ({
        periods: [...state.periods],
        currentPeriod: state.currentPeriod
    }),
    (dispatch) => ({
        changePeriod(id) {
            dispatch(switchCurrentPeriod(id));
        },
        changeStartDate(id, startDate) {
            dispatch(editStartDate(id, startDate));
        },
        changeEndDate(id, endDate) {
            dispatch(editEndDate(id, endDate))
        },
        changeName(id, name) {
            dispatch(editName(id, name));
        },
        toggleStatus(id) {
            dispatch(toggleStatus(id));
        }
    })
)(App);
