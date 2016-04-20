## React app with hot loading

Using the react hot boilerplate

```
mkdir react_hot; cd react_hot
git clone git@github.com:gaearon/react-hot-boilerplate.git .
rm -rf .git
npm install
npm start
```

You may want to change the host in server.js and webpack.config.js from localhost to 0.0.0.0 to allow access from same WiFi network or from vagrant.

Install the webpack style loader package so we can loads css files. You could install a less or scss loader too if that's your thing.

```
npm install --save-dev style-loader
npm install --save-dev css-loader
npm install --save-dev postcss-loader
npm install --save-dev less-loader
```

Then update your webpack.config.js file to use these new npm packages.

```
  module: {
    loaders: [
      // tell webpack to use react-hot and babel to process js and jsx files
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      // tell webpack to use the style-loader, css-loader, postcss-loader and less-loader
      // in that order, to process less files
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      }
    ]
```



Load the materialize.css library and fonts from a cdn. Paste these into index.html directly.

```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
```

```
<nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Contact List App (v5)</a>
  </div>
</nav>
<div class="container">
  <div class="col s4 main">
    <div class="row filter">
      <div class="col s12">
        <input placeholder="Filter by name" type="text"/>
      </div>
    </div>
    <ul class="collection contact-list">
      <li class="collection-item avatar">
        <img src="http://www.avatarsdb.com/avatars/daffy_duck_05.jpg" alt="" class="circle">
        <span class="title">Daffy Duck</span>
        <p>daffy@gmail.com</p>
      </li>
      <li class="collection-item avatar">
        <img src="http://avatarbox.net/avatars/img35/tweety_smoke_avatar_picture_56672.jpg" alt="" class="circle">
        <span class="title">Tweety</span>
        <p>tweety@gmail.com</p>
      </li>
    </ul>
  </div>
</div>
```

We will add some styles to `styles/main.less`

```css
nav .brand-logo.center {
  font-size: 1.8em;
}

.container .main{
  padding-top: 10%;
}

.small-contact.selected {
  background-color: #FFFFCC;
}
```

We will simulate an API call by calling a function that returns some dummy data asynchronously.

```js
export function getContacts(callback) {
  var contacts = [
    {id: 1, name: "Daffy Duck", email: "daffy@gmail.com", image_url: "http://www.avatarsdb.com/avatars/daffy_duck_05.jpg"},
    {id: 2, name: "Tweety", email: "tweety@gmail.com", image_url: "http://avatarbox.net/avatars/img35/tweety_smoke_avatar_picture_56672.jpg"},
    {id: 3, name: "Elmer Fudd", email: "elmer@gmail.com", image_url: "http://vignette3.wikia.nocookie.net/cnfantasyschedules/images/8/88/Elmer_Fudd_(Looney_Tunes).png"},
    {id: 4, name: "Bugs Bunny", email: "bugs.bunny@gmail.com", image_url: "http://static.comicvine.com/uploads/original/6/62058/2013735-59654_bugs_bunny.jpg"},
    {id: 5, name: "Wile E. Coyote", email: "wile@gmail.com", image_url: "https://38.media.tumblr.com/avatar_0442287fea85_128.png"},
    {id: 6, name: "Donald Duck", email: "donald@gmail.com", image_url: "http://www.avatarsdb.com/avatars/donald_duck_01.gif"},
  ];

  setTimeout(callback(contacts), 300)
}
```

## Building the app


#### Step1: Decide which components we need

The first step is to split up your UI into components.

```
App
  - Nav
  - ContactList
    - ContactItem(s)
```

Tip: identify the parts of the app that repeat. Those will definitely be their own component. In this example the <li> with contact info repeats itself so we use the ContactItem component for it.

#### Step2: Render the components with static html

- es2015
- import
- jsx
- webpack & babel

#### Step3: Bring the data down!

We will use a fake api function to simulate an asynchronous api call.

- component props
- component state
- react component lifecycle methods
- "actions up - data down" -> talk about the data down part
- es2015 fat arrow

```
constructor(props) {
  super(props)
  this.state = {contacts: [], filter: ""}
}
```

#### Step4: Form inputs in react

- onChange
- value
- synthetic events
- es2015 classes and .bind(this) on events

#### Step5: Use a computed value for visibleContacts

The App component is the top level component.

#### Step6: "Actions Up" - implement delete contact

... using set state to alter this.state.contacts in app.
