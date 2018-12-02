import { FILTER_FLIGHTNUMBER, FILTER_DELAYED } from '../actions/types'

const initialState = {
    flight_number: '',
    showDelayed: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_FLIGHTNUMBER:
            return {...state,
                    flight_number: action.payload
                }
        case FILTER_DELAYED:
            return {...state,
                    showDelayed: action.payload
                }
        default:
            return state
    }
}