import { LOAD_ARRIVING_TIMETABLE, LOAD_DEPARTURE_TIMETABLE } from '../actions/types'

const initialState = {
    departureTimetable: {
        records: [],
    },
    arrivalTimetable: {
        records: [],
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_ARRIVING_TIMETABLE:
            return {
                ...state,
                arrivalTimetable: {
                    ...state.arrivalTimetable,
                    records: action.payload.items
                }
            }
        case LOAD_DEPARTURE_TIMETABLE:
            return {
                ...state,
                departureTimetable: {
                    ...state.departureTimetable,
                    records: action.payload.items
                }
        }
        default:
            return state
    }
}