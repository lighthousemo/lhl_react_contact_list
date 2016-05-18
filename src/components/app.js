import React, { Component } from 'react';
import { getContacts } from '../lib/fake_api.js'
import Nav from './nav.js'
import ContactList from './contact_list.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    // could set state variables
    this.state = {contacts: [], contactsLoaded: false}
  }

  // called after the render() method
  componentDidMount() {
    getContacts((contacts) => {
      this.setState({...this.state, contacts: contacts, contactsLoaded: true})
    })
  }

  render() {
    console.log("render() <App />")
    return (
      <div>
        <Nav />
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}
