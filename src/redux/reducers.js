import { ACTIONS, MOVEMENT_TYPES, MOVEMENT_STATUS } from '../constants.js';

export const movement = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_MOVEMENT:
            return {
                id: action.id,
                concept: action.concept,
                value: action.value,
                type: action.type,
                status: action.status
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
            return (state.id !== action.id)
                ? state
                : {
                    ...state,
                    movementType: state.movementType === MOVEMENT_TYPES.INCOME
                        ? MOVEMENT_TYPES.EXPENSE
                        : MOVEMENT_TYPES.INCOME
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

export const movements = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_MOVEMENT:
            return [
                ...state,
                movement({}, action)
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

export const period = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_PERIOD:
            return {
                id: action.id,
                name: action.name,
                startDate: action.startDate,
                endDate: action.endDate,
                notes: action.notes,
                expanded: false,
                movements: movements([], action)
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
            return {
                ...state,
                movements: movements(state.movements, action)
            }
        default:
            return state;
    }
};

export const periods = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD_PERIOD:
            return [
                ...state,
                period({}, action)
            ];
        case ACTIONS.REMOVE_PERIOD:
            return state.filter(item => item.id !== action.id);
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
            return action.id;
        default:
            return state;
    }
};