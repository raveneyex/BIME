import { connect } from 'react-redux';
import PeriodList from './Periods/PeriodList.js';
import { switchCurrentPeriod } from '../redux/actionCreators.js';

export const Periods = connect(
    (state) => ({   //MapStateToProps
        periods: [...state.periods]
    }),
    (dispatch) => ({    //MapDispatchToProps
        changePeriod(id) {
            dispatch(switchCurrentPeriod(id))
        }
    })
)(PeriodList);

