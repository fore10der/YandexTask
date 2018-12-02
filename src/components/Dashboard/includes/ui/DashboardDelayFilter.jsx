import React, { Component, Fragment } from 'react';
import { Label, Input, FormGroup } from 'reactstrap';

class DashboardDelayFilter extends Component {

    delayedToggle = (e) => {
        this.props.toggleDelayed(e.target.checked)
    }

    render() {
        return (
            <div>
                    <input defaultChecked={this.props.showDelayed} onChange={this.delayedToggle} type="checkbox" id="delay_filter" style={{display : "none"}}/>
                    <label htmlFor="delay_filter" className="toggle"><span></span></label>
                    <label htmlFor="delay_filter">Только задержанные рейсы</label>    
            </div>
        );
    }

}

export default DashboardDelayFilter;