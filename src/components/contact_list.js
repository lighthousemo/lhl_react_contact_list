import React, { Component } from 'react';
import ContactListItem from './contact_list_item.js'

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {filterText: ""}
  }

  handleFilterChange(e) {
    this.setState({...this.state, filterText: e.target.value})
  }

  render() {
    console.log("render <ContactList />")
    var filteredContacts = this.props.contacts.filter((contact) => {
      return (contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0)  ||
             (contact.email.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >=0)
    })
    var items = filteredContacts.map((contact) => {
      return <ContactListItem key={contact.id} contact={contact}/>
    })
    return (
      <div className="container">
        <div className="col s4 main">
          <div className="row filter">
            <div className="col s12">
              <input
                placeholder="Filter by name"
                type="text"
                value={this.state.filterText}
                onChange={this.handleFilterChange.bind(this)}
              />
            </div>
          </div>
          <ul className="collection contact-list">
            {items}
          </ul>
        </div>
      </div>
    )
  }
}
