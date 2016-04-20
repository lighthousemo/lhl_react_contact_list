import React, { Component } from 'react'

export default class ContactItem extends Component {
  handleDelete(e) {
    e.stopPropagation()
    this.props.deleteContact(this.props.contact.id)
  }

  render() {
    var contact = this.props.contact;
    return (
      <li className="collection-item avatar">
        <img src={contact.image_url} alt="" className="circle" />
        <span className="title">{contact.name}</span>
        <p>{contact.email}</p>
        <span onClick={this.handleDelete.bind(this)}>x</span>
      </li>
    )
  }
}
