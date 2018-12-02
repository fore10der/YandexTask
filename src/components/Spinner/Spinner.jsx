import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
            <div style={{width: 100 + '%', height: 100 + '%',}} className="dashboard-spinner lds-rolling">
                <div>
                </div>
            </div>
    );
};

export default Spinner;