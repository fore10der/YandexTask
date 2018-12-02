import React, { Component} from 'react';
import Navbar from './Navbar/Navbar'
import ArrivingFlights from './ArrivingFlights'
import DepartingFlights from './DepartingFlights'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <Switch>
                        <Route exact path="/arriving_flights" component={ArrivingFlights} />
                        <Route path="/departing_flights" component={DepartingFlights} />
                        <Redirect to="/arriving_flights"/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Root;