import React, { Component } from 'react';
import Nav from './components/nav';
import Contact from './components/contact';
import Filter from './components/filter';
import { getContacts } from './lib/fake_api.js';

export default class App extends Component {
  componentWillMount() {
    getContacts(function(contacts) {
      this.setState({contacts: contacts, filteredContacts: contacts})
    }.bind(this))
  }

  filterChanged(filterText) {
    if(filterText === "") {
      // display all contacts if the search keyword is empty
      this.setState({filteredContacts: this.state.contacts})
    } else {
      // update this.state.filteredContacts to contain the list of contacts matching the search keyword
      var filteredContacts = this.state.contacts.filter(function(contact) {
        return contact.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
      });
      this.setState({filteredContacts: filteredContacts}) // triggers a render()
    }
  }

  render() {
    if(!this.state) {
      return <div><h1>Loading....</h1></div>
    }
    var contactComponents = this.state.filteredContacts.map(function(contact) {
      return <Contact key={contact.id}
                      name={contact.name}
                      email={contact.email}
                      image_url={contact.image_url}/>
    })
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="col s4 main">
            <Filter filterChanged={this.filterChanged.bind(this)}/>
            <ul className="collection contact-list">
              {contactComponents}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
