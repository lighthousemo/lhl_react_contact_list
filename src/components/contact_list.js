import React, { Component } from 'react'
import ContactItem from './contact_item'

export default class ContactList extends Component {
  render() {
    var contactItems = this.props.contacts.map((contact) => {
      return <ContactItem contact={contact} deleteContact={this.props.deleteContact} key={contact.id}/>
    })
    return (
      <ul className="collection contact-list">
        {contactItems}
      </ul>
    )
  }
}
