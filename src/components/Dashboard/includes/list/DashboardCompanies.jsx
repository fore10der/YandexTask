import React from 'react';

const DashboardCompanies = (props) => {
    return (
        <th>
            {props.item.companies ? props.item.companies.map((company, key) => 
                <div key={key}>
                    {`${company.code} ${company.flt}`}
                </div>
            ) : null}
        </th>
    );
};

export default DashboardCompanies;