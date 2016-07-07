import React, { Component } from 'react';
import ContactItem from './contact_item'

export default class ContactList extends Component {

  constructor(props)  {
    super(props)
    this.state = {filterText: ""}
  }

  updateFilterText(e) {
    this.setState({filterText: e.target.value})
  }

  render() {
    const visibleContacts = this.props.contacts.filter((contact) => {
      return contact.name.includes(this.state.filterText)
    })
    const contactItems = visibleContacts.map(function(contact) {
      // {id: 1, name: "Daffy Duck", email: "blah"}
      return <ContactItem key={contact.id} contact={contact}/>
    })
    return (
      <div className="container">
          <div className="col s4 main">
            <div className="row filter">
              <div className="col s12">
                <input placeholder="Filter by name" type="text" onChange={this.updateFilterText.bind(this)} value={this.state.filterText}/>
              </div>
            </div>
            <ul className="collection contact-list">
              {contactItems}
            </ul>
          </div>
        </div>
    )
  }
}
