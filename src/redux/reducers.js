import { ACTIONS, MOVEMENT_TYPES, MOVEMENT_STATUS } from '../constants.js';

export const periods = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_PERIOD:
            return [
                ...state,
                period({}, action)
            ];
        case ACTIONS.REMOVE_PERIOD:
            return state.filter(item => item.id !== action.id);
        case ACTIONS.EDIT_NAME:
        case ACTIONS.EDIT_START_DATE:
        case ACTIONS.EDIT_END_DATE:
        case ACTIONS.ADD_MOVEMENT:
        case ACTIONS.REMOVE_MOVEMENT:
        case ACTIONS.EDIT_CONCEPT:
        case ACTIONS.EDIT_VALUE:
        case ACTIONS.TOGGLE_TYPE:
        case ACTIONS.TOGGLE_STATUS:
            return state.map(item => period(item, action));
        default:
            return state;
    }
};

export const currentPeriod = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SWITCH_PERIOD:
            return state !== action.id ? action.id : state;
        default:
            return state;
    }
};

const movement = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_MOVEMENT:
            return {
                id: action.id,
                value: 0,
                movementType: MOVEMENT_TYPES.INCOME,
                concept: ''
            };
        case ACTIONS.EDIT_CONCEPT:
            return (state.id !== action.id) 
                ? state
                : {
                    ...state,
                    concept: action.concept
                };
        case ACTIONS.EDIT_VALUE:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    value: action.value
                };
        case ACTIONS.TOGGLE_TYPE:
            const isIncome = state.movementType === MOVEMENT_TYPES.INCOME;
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    status: !state.status && isIncome ? MOVEMENT_STATUS.UNPAID: state.status, 
                    movementType: isIncome? MOVEMENT_TYPES.EXPENSE : MOVEMENT_TYPES.INCOME
                };
        case ACTIONS.TOGGLE_STATUS:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    status: state.status === MOVEMENT_STATUS.PAID
                        ? MOVEMENT_STATUS.UNPAID
                        : MOVEMENT_STATUS.PAID
                }
        default:
            return state;
    }
};

const movements = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_MOVEMENT:
            return [
                movement({}, action),
                ...state
            ];
        case ACTIONS.REMOVE_MOVEMENT:
            return state.filter(movement => movement.id !== action.id);
        case ACTIONS.EDIT_CONCEPT:
        case ACTIONS.EDIT_VALUE:
        case ACTIONS.TOGGLE_TYPE:
        case ACTIONS.TOGGLE_STATUS:
            return state.map(item => movement(item, action));
        default:
            return state;
    }
};

const period = (state = {}, action) => {
    let moves;
    switch (action.type) {
        case ACTIONS.ADD_PERIOD:
            moves = movements([], action);

            return {
                id: action.id,
                name: action.name,
                startDate: action.startDate,
                endDate: action.endDate,
                notes: action.notes,
                expanded: false,
                movements: moves,
                incomes: incomes(moves),
                expenses: expenses(moves)
            };
        case ACTIONS.EDIT_NOTE:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    notes: action.notes
                };
        case ACTIONS.EDIT_NAME:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    name: action.name
                };
        case ACTIONS.EDIT_START_DATE:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    startDate: action.startDate
                };
        case ACTIONS.EDIT_END_DATE:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    endDate: action.endDate
                };
        case ACTIONS.TOGGLE_INFO:
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    expanded: !state.expanded
                };
        case ACTIONS.ADD_MOVEMENT:
        case ACTIONS.REMOVE_MOVEMENT:
        case ACTIONS.EDIT_CONCEPT:
        case ACTIONS.EDIT_VALUE:
        case ACTIONS.TOGGLE_TYPE:
        case ACTIONS.TOGGLE_STATUS:
            moves = movements(state.movements, action);
            return {
                ...state,
                movements: moves,
                incomes: incomes(moves),
                expenses: expenses(moves)
            };
        default:
            return state;
    }
};

const sumByProp = (prop) => (accumulator, next) => accumulator + parseInt(next[prop], 10);

const filter = (prop, movementType) => (item) => item[prop] === movementType;

const sumValue = sumByProp('value');
const incomesFilter = filter('movementType', MOVEMENT_TYPES.INCOME);
const expensesFilter = filter('movementType', MOVEMENT_TYPES.EXPENSE);
const paidsFilter = filter('status', MOVEMENT_STATUS.PAID);

const incomes = (items = []) => {
    return items
        .filter(incomesFilter)
        .reduce(sumValue, 0);
};

const expenses = (items = []) => {
    return items
        .filter(expensesFilter)
        .filter(paidsFilter)
        .reduce(sumValue, 0)
};