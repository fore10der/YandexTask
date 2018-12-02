import React from 'react';
import DashboardSearchFilter from './includes/ui/DashboardSearchFilter'
import DashboardDelayFilter from './includes/ui/DashboardDelayFilter'

const DashboardUI = (props) => {
    return (
        <div className="dashboard-form">
            <p className="dashboard-title dashboard-title_size_small">Поиск по номеру рейса или коду авиакомпании внутри текущего раздела:</p>
            <DashboardDelayFilter showDelayed={props.showDelayed} toggleDelayed={props.toggleDelayed} showDelayed={props.showDelayed} />
            <DashboardSearchFilter onSearch={props.onSearch} filter={props.filter} />
        </div>
    );
};

export default DashboardUI;