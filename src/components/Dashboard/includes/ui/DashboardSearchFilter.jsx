import React, { Component } from 'react';
import { Input } from 'reactstrap';
import './DashboardSearchFilter.sass'

class DashboardSearchField extends Component {

    handleSearch = (e) => {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <Input className="mt-md-4 mt-2 mb-md-2 mb-4" onChange={this.handleSearch} value={this.props.filter} placeholder="Введите запрос"></Input>
        );
    }
}

export default DashboardSearchField;