import dateFormat from 'dateformat'

export function dateBitrixFormat(date){
    let modifedDate = dateFormat(date,'yyyy-mm-dd"T"HH:MM:sso');
    return modifedDate.substr(0, modifedDate.length - 2) + ':' + modifedDate.substr(modifedDate.length - 2)
}

export function ArrivalPreprocessing(data) {

    data = data.filter(item => item.status_code != 12 && item.status_code != 1 && item.status_code != 2)
    data = data.sort((a,b) => a.i_id > b.i_id ? 1 : -1)

    data.forEach ((item) => {
        item.destination = item.mar1.description_r
        if (new Date(item.t_st) - new Date(item.t_et) >= 0){
            item.status_code = 0
            item.vip_status = 'Без задержки'
        }
        else {
            item.status_code = 1
            item.vip_status = 'С задержкой'
        }
        item.event_time = item.t_et ? item.t_et : item.t_st
        if (item.main_flight) {
            let main_flight = data.find((nominal_main_item) => nominal_main_item.i_id == item.main_flight)
            if (!main_flight)
                return
            main_flight.companies.push({
                code: item.co.code,
                flt: item.flt
            })
        }
        else item.companies = [
            {
                code: item.co.code,
                flt: item.flt
            }
        ]
    })

    data = data.filter(item => item.companies !== undefined)
    data = data.sort((a,b) => a.event_time > b.event_time ? 1 : -1)

    data.forEach((item) => {
        item.companies_friendly = []
        item.companies.forEach(company => {
            item.companies_friendly.push(company.code + ' ' + company.flt)
        })
    })

    return data
}

export function DeparturePreprocessing(data) {

    data = data.filter(item => item.status_code != 12 && item.status_code != 1 && item.status_code != 2)
    data = data.sort((a,b) => a.i_id > b.i_id ? 1 : -1)

    data.forEach ((item) => {
        item.destination = item.mar2.description_r
        if (new Date(item.t_st) - new Date(item.t_et) >= 0){
            item.status_code = 0
            item.vip_status = 'Без задержки'
        }
        else {
            item.status_code = 1
            item.vip_status = 'С задержкой'
        }
        item.event_time = item.t_et ? item.t_et : item.t_st
        if (item.main_flight) {
            let main_flight = data.find((nominal_main_item) => nominal_main_item.i_id == item.main_flight)
            if (!main_flight)
                return
            main_flight.companies.push({
                code: item.co.code,
                flt: item.flt
            })
        }
        else item.companies = [
            {
                code: item.co.code,
                flt: item.flt
            }
        ]
    })

    data = data.filter(item => item.companies !== undefined)
    data = data.sort((a,b) => a.event_time > b.event_time ? 1 : -1)

    data.forEach((item) => {
        item.companies_friendly = []
        item.companies.forEach(company => {
            item.companies_friendly.push(company.code + ' ' + company.flt)
        })
    })

    return data
}

export const HOURS_INTERVAL = 2