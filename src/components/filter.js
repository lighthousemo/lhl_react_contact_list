import React, { Component } from 'react';

export default class Filter extends Component {

  onFilterChange(element) {
    this.props.filterChanged(element.target.value)
  }

  render() {
    return (
      <div className="row filter">
        <div className="col s12">
          <input placeholder="Filter by name" type="text" onChange={this.onFilterChange.bind(this)}/>
        </div>
      </div>
    );
  }
}
