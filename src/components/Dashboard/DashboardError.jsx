import React from 'react';
import {Alert} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';


const DashboardError = (props) => {
    clearInterval(props.updateId)
    return (
        <Alert className="dashboard-error" color="danger">
            <b className="dashboard-title">Ой, что-то пошло не так</b>
            <i className="fas fa-exclamation-triangle"></i>
            <span>Мы уже занимаемся исправлениями, зайдите позже</span>
        </Alert>
    );
};

export default DashboardError;