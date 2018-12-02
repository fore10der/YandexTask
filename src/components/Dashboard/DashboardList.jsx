import React, {Fragment} from 'react';
import { Table } from 'reactstrap';
import DashboardHeader from './DashboardHeader'
import DashboardContent from './DashboardContent'
import DashboardError from './DashboardError'
import Spinner from '../Spinner/Spinner'



const DashboardList = (props) => {
    const Content = props.isLoading ? <Spinner/> : props.hasError ? <DashboardError updateId={props.updateId}/> :  <Fragment>
                                                                                <h1 className="dashboard-title">{props.globalTitle}</h1>
                                                                                <Table hover>
                                                                                    <DashboardHeader destinationTitle={props.destinationTitle}/>
                                                                                    <DashboardContent showDelayed={props.showDelayed} toggleDelayed={props.toggleDelayed} filter={props.filter} flights={props.flights}/>
                                                                                </Table>
                                                                            </Fragment>
    return Content;
};

export default DashboardList;