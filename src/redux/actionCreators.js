import uuid from 'uuid';
import { ACTIONS } from '../constants.js';

export const addMovement = () => ({
    id: uuid.v4(),
    type: ACTIONS.ADD_MOVEMENT
});

export const editConcept = (id, concept) => ({
    type: ACTIONS.EDIT_CONCEPT,
    id,
    concept
});

export const editValue = (id, value) => ({
    type: ACTIONS.EDIT_VALUE,
    id,
    value
});

export const toggleType = (id) => ({
    type: ACTIONS.TOGGLE_TYPE,
    id
});

export const toggleStatus = (id) => ({
    type: ACTIONS.TOGGLE_STATUS,
    id
});

export const removeMovement = (id) => ({
    type: ACTIONS.REMOVE_MOVEMENT,
    id
});

export const addPeriod = (name, startDate, endDate, notes) => ({
    id: uuid.v4(),
    type: ACTIONS.ADD_PERIOD,
    name,
    startDate,
    endDate,
    notes
});

export const editNote = (id, notes) => ({
    type: ACTIONS.EDIT_NOTE,
    id,
    notes
});

export const editName = (id, name) => ({
    type: ACTIONS.EDIT_NAME,
    id,
    name
});

export const editStartDate = (id, startDate) => ({
    type: ACTIONS.EDIT_START_DATE,
    id,
    startDate
});

export const editEndDate = (id, endDate) => ({
    type: ACTIONS.EDIT_END_DATE,
    id,
    endDate
});

export const toggleInfo = (id) => ({
    type: ACTIONS.TOGGLE_INFO,
    id
});

export const switchCurrentPeriod = (id) => ({
    type: ACTIONS.SWITCH_PERIOD,
    id
});

