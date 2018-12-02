import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getDeparturingFlights, searchFlights, toggleDelayed } from '../actions/DasboardActions'
import Dashboard from './Dashboard/Dasboard'
import Navbar from './Navbar/Navbar'
import {withRouter} from 'react-router-dom'

class AppArrivingFlights extends Component {

    componentDidMount(){
        if (!this.props.hasError){
            this.props.getDeparturingFlights()
            this.updateId = setInterval(() => this.props.getDeparturingFlights(), 10000);
        }
    }

    componentWillUnmount(){
        clearInterval(this.updateId)
    }

    render() {
        return (
            <Fragment>
                <Navbar/>
                <Dashboard globalTitle={'Вылетающие рейсы'} destinationTitle={'Пункт назначения'} toggleDelayed={this.props.toggleDelayed} showDelayed={this.props.showDelayed} updateId={this.updateId}  hasError={this.props.hasError} onSearch={this.props.searchFlights} filter={this.props.filter} isLoading={this.props.isLoading} flights={this.props.flights}></Dashboard>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    flights: state.timetables.departureTimetable.records.filter(flight => flight.companies_friendly.some(company => company.toLowerCase().includes(state.filter.flight_number.toLowerCase())) && (!state.filter.showDelayed ^ (state.filter.showDelayed && flight.status_code == 1))),
    isLoading: state.service.isLoading,
    hasError: state.service.hasError,
    filter: state.filter.flight_number,
    showDelayed : state.filter.showDelayed
})

export default withRouter(connect(mapStateToProps,{ getDeparturingFlights, searchFlights, toggleDelayed })(AppArrivingFlights));