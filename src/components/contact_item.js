import React, { Component } from 'react';

export default class ContactItem extends Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img src={this.props.contact.image_url} alt="" className="circle"/>
        <span className="title">{this.props.contact.name}</span>
        <p>{this.props.contact.email}</p>
      </li>
    )
  }

}
