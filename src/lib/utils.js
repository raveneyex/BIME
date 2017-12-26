import { MOVEMENT_TYPES } from '../constants';

export const movementTypesSort = (a, b) => {
    const aType = a.movementType;
    const bType = b.movementType;
    const INCOME = MOVEMENT_TYPES.INCOME;
    const EXPENSE = MOVEMENT_TYPES.EXPENSE;

    if (aType === INCOME && bType === EXPENSE) { //Incomes first
        return -1;
    } else if (aType === EXPENSE && bType === INCOME) {
        return 1;
    } else {
        return 0;
    } 
};