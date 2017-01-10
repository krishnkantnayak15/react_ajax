import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Faq from './components/Faq';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Random from './components/Random';
import Currency from './components/Currency';
import Movie_Watch_List from './components/Movie_Watch_List';



ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component={App}>
      <IndexRoute component={Home} />
      <Route path = "Movie_Watch_List" component={Movie_Watch_List} />
      //<Route path = "Currency" component={Currency} />
      <Route path = "Random" component={Random} />

      <Route path = "About" component={About} />
      <Route path = "Faq" component={Faq} />
    </Route>
  </Router>,
  document.getElementById('root')
);
