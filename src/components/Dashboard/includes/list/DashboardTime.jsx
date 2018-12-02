import React from 'react';
import dateFormat from 'dateformat';

const DashboardTime = (props) => {
    return (
        <th dangerouslySetInnerHTML={{__html: props.item.t_et ? (`<sup><s>${dateFormat(props.item.t_st,'HH:MM')}</s></sup> <strong>${dateFormat(props.item.t_et,'HH:MM')}</strong>`) : (`${dateFormat(props.item.t_st,'HH:MM')}`)}} ></th>
    );
};

export default DashboardTime;