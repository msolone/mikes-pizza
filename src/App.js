import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoriesList from './Components/CategoriesList'


class App extends Component {
  render() {
    return (
      <Router>
        <section className="perma-page">
          <section className="header">
            <h1>Mike's Pizza</h1>
          </section>
          <section className="body">
            <section className="categories">
              
              <ul>
                <Link to=''><li>Apps</li></Link>
                <Link to=''><li>Entrees</li></Link>
                <Link to=''><li>Desserts</li></Link>
                <Link to=''><li>Drinks</li></Link>
             </ul>

            </section>

            <section className="dynamic-page">
              <Switch>
                <Route path="/" exact component={CategoriesList} />
              </Switch>
            </section>

            <section className="deals">

            <ul>
                <Link to=''><li>DEAL 1</li></Link>
                <Link to=''><li>DEAL 2</li></Link>
                <Link to=''><li>DEAL 3</li></Link>
                <Link to=''><li>DEAL 4</li></Link>
             </ul>

            </section>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
