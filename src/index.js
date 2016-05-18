import React from 'react';
import ReactDOM from 'react-dom';
require('./styles/main.less')
import { getContacts } from './lib/fake_api.js'
import App from './components/app.js'

ReactDOM.render(<App />, document.querySelector("#root"))



// document.querySelector("#root").addEventListener("click", function() {
//   console.log("click", this.textContent)
//   var sayHello = () => {
//     console.log("hello " + this.textContent)
//   }
//   sayHello()
// })

