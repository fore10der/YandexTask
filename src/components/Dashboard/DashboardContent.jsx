import React from 'react';
import DashboardEmptyResults from './includes/list/DashboardEmptyResults'
import DashboardCompanies from './includes/list/DashboardCompanies'
import DashboardCity from './includes/list/DashboardCity'
import DashboardStatus from './includes/list/DashboardStatus'
import DashboardTerminal from './includes/list/DashboardTerminal'
import DashboardTime from './includes/list/DashboardTime'

const DashboardContent = (props) => {
    return (
        <tbody>
                {!props.flights.toString() && (props.filter || props.showDelayed) ? (
                    <DashboardEmptyResults message={'Рейсов по данному запросу не было найдено'} />
                ) : !props.flights.toString() && (!props.filter && !props.showDelayed) ? <DashboardEmptyResults message={'Сервер не вернул рейсы для данного раздела'} /> : (
                    props.flights.map((item,key) => 
                    <tr key={key}>
                        <DashboardTime item={item}/>
                        <DashboardCity item={item}/>
                        <DashboardCompanies item={item}/>
                        <DashboardStatus item={item}/>
                        <DashboardTerminal item={item}/>
                    </tr>
                    )
                )
                }
        </tbody>
    );
};

export default DashboardContent;