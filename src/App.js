import React, { Component } from 'react';
import ContactList from './components/contact_list.js'
import { getContacts } from './lib/fake_api'

export default class App extends Component {

  componentDidMount() {
    console.log("componentDidMount()")
    // $.ajax(...)
    getContacts((data) => {
      console.log("Got data")
      this.setState({contacts: data}) // this will call render() automatically
    })

    // setTimeout(() => {
    //   this.setState({contacts: [this.state.contacts[0]]})
    // }, 3000)
  }

  render() {
    console.log("Rendering <App />")
    if(this.state && this.state.contacts) {
      return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Contact List App (v5)</a>
            </div>
          </nav>
          <ContactList contacts={this.state.contacts} />
        </div>
      );
    } else {
      return <h1>Loading... </h1>
    }
  }
}


