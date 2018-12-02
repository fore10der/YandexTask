import { LOAD_ARRIVING_TIMETABLE, LOAD_DEPARTURE_TIMETABLE , FILTER_FLIGHTNUMBER, GOT_ERROR, SUCCESS_LOAD, START_LOAD, FILTER_DELAYED } from './types'
import axios from 'axios'
import to from 'await-to-js'
import { ArrivalPreprocessing ,dateBitrixFormat, HOURS_INTERVAL, DeparturePreprocessing } from '../specials'

export const getArrivingFlights = () => async dispatch => {
    
    let dateStart = new Date()
    let dateEnd = new Date(+new Date() + 3600*HOURS_INTERVAL*1000)
        
    let [error, result] = await to(axios.get('https://www.svo.aero/bitrix/timetable',{
        params: {
            direction: 'arrival',
            perPage: 9999,
            dateStart: dateBitrixFormat(dateStart),
            dateEnd: dateBitrixFormat(dateEnd),
        } 
    }))

    if (error){
        return dispatch({
            type: GOT_ERROR,
            payload: false
        })
    }
    else {
        result.data.items = ArrivalPreprocessing(result.data.items)
        dispatch({
            type: LOAD_ARRIVING_TIMETABLE,
            payload: result.data
        })
        dispatch({
            type: SUCCESS_LOAD,
            payload: true
        })
    }
}

export const getDeparturingFlights = () => async dispatch => {
    
    let dateStart = new Date()
    let dateEnd = new Date(+new Date() + 3600*HOURS_INTERVAL*1000)
        
    let [error, result] = await to(axios.get('https://www.svo.aero/bitrix/timetable',{
        params: {
            direction: 'departure',
            perPage: 9999,
            dateStart: dateBitrixFormat(dateStart),
            dateEnd: dateBitrixFormat(dateEnd),
        } 
    }))

    console.log("ass")

    if (error){
        return dispatch({
            type: GOT_ERROR,
            payload: false
        })
    }
    else {
        result.data.items = DeparturePreprocessing(result.data.items)
        dispatch({
            type: LOAD_DEPARTURE_TIMETABLE,
            payload: result.data
        })
        dispatch({
            type: SUCCESS_LOAD,
            payload: true
        })
    }
}


export const searchFlights = (filter) => async dispatch => {
    return dispatch({
        type: FILTER_FLIGHTNUMBER,
        payload: filter
    })
}

export const toggleDelayed = (value) => async dispatch => {
    return dispatch({
        type: FILTER_DELAYED,
        payload: value
    })
}