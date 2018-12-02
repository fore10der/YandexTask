import { GOT_ERROR, SUCCESS_LOAD, START_LOAD } from "../actions/types";

const initialState = {
    isLoading: true,
    hasError: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        case SUCCESS_LOAD:
            return {
                ...state,
                isLoading: false
            }
        case START_LOAD:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}