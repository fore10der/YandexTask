import React from 'react';

const DashboardHeader = (props) => {
    return (
        <thead>
            <tr>
                <th>Время прибытия</th>
                <th>{props.destinationTitle}</th>
                <th>Номер рейса</th>
                <th>Статус рейса</th>
                <th>Терминал</th>
            </tr>
        </thead>
    );
};

export default DashboardHeader;