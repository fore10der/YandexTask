import React from 'react';
import './Dasboard.sass'
import DashboardList from './DashboardList';
import { Container, Row, Col } from 'reactstrap'
import DashboardUI from './DashboardUI';

const Dasboard = (props) => {
  return (
    <Container className="dashboard">
      <Row>
        <Col className="dashboard-list" xs={{order: 2}} md={{order: 1, size: 9}}>
            <DashboardList globalTitle={props.globalTitle} destinationTitle={props.destinationTitle} showDelayed={props.showDelayed} toggleDelayed={props.toggleDelayed} updateId={props.updateId} hasError={props.hasError} isLoading={props.isLoading} filter={props.filter} flights={props.flights}></DashboardList>
        </Col>
        <Col className="dashboard-ui" xs={{order: 1}} md={{order: 2, size: 3}}>
            <DashboardUI toggleDelayed={props.toggleDelayed} showDelayed={props.showDelayed} onSearch={props.onSearch} filter={props.filter} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dasboard;