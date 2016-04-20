import React, { Component } from 'react'
import Nav from './nav'
import ContactList from './contact_list'
import { getContacts } from '../lib/fake_api'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {contacts: [], filter: ""}
  }

  componentWillMount() {
    console.log("Fetching contacts...")
    getContacts((allContacts) => {
      console.log("Got contacts", allContacts)
      this.setState({contacts: allContacts})
    })
  }

  handleFilterChange(e) {
    e.stopPropagation()
    const newFilter = e.target.value
    this.setState({...this.state, filter: newFilter})
  }

  deleteContact(contactId) {
    var newContacts = this.state.contacts.filter((contact) => contact.id != contactId)
    // {...this.state, filter: someVal } in es2015 this is called the spread operator
    // it takes an object (this.state) and **creates a copy** of the original
    // objects with the keys and values applied to the copy
    this.setState({...this.state, contacts: newContacts})
  }

  render() {
    console.log("rending <app>")
    var visibleContacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(this.state.filter) > -1
    })
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="col s4 main">
            <div className="row filter">
              <div className="col s12">
                <input placeholder="Filter by name" value={this.state.filter} onChange={this.handleFilterChange.bind(this)} type="text"/>
              </div>
            </div>
            <ContactList contacts={visibleContacts} deleteContact={this.deleteContact.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
