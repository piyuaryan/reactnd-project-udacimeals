import {ADD_RECIPE, REMOVE_FROM_CALENDAR} from "../actions";

// if same meals are to be consumed for multiple days then duplicating is not best way.
// hence use new reducer that would have food.
// NOTE that action type is same in both reducers. so we'll have to do combineReducers()
function food(state = {}, action) {
    switch (action.type) {
        case ADD_RECIPE :
            const {recipe} = action;

            return {
                ...state,
                [recipe.label]: recipe,
            };
        default :
            return state
    }
}

const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
};


// Reducer
function calendar(state = initialCalendarState, action) {
    const {day, recipe, meal} = action;

    switch (action.type) {
        case ADD_RECIPE :
            return {
                ...state,   // Object Spread synta
                [day]: {
                    ...state[day],
                    [meal]: recipe.label,
                }
            };
        case REMOVE_FROM_CALENDAR :
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null,
                }
            };
        default :
            return state
    }
}

export default calendar