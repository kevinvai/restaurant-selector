import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RestaurantBox from './components/restaurantbox/RestaurantBox';
import RestaurantVote from './components/restaurantvote/RestaurantVote';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>RANDOM RESTAURANT SELECTOR</h1>
        <em>Because we can't ever fucking decide..</em>
      </div>  
      <Router>
        <Route exact path="/" component={RestaurantBox}/>
        <Route exact path="/vote" component={RestaurantVote}/>
      </Router>
    </div>
  );
}

export default App;
