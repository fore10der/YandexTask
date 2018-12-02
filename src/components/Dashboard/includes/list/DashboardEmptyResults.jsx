import React from 'react';

const DashboardEmptyResults = (props) => {
    return (
        <tr className="dashboard-noresult">
            <th colSpan="5"><span>{props.message}</span></th>
        </tr>
    );
};

export default DashboardEmptyResults;