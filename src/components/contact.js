import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    console.log("Rending Contact with props: ", this.props)
    return (
      <li className="collection-item avatar">
        <img className="circle" src={this.props.image_url}></img>
        <span className="title">{this.props.name}</span>
        <p>{this.props.email}</p>
      </li>
    );
  }
}
