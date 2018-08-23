import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList";
import Data from "./Data.json";

class App extends Component {
  render() {
    console.log(Data.drinks.meals[0]);
    return (
      <Router>
        <section className="perma-page">
          <section className="header">
            <h1>Mike's Pizza</h1>
          </section>
          <section className="body">
            <section className="categories">
              <ul className="left-side-bar">
                <Link to="">
                  <li>{Data.appetizers.title}</li>
                  <img src={Data.appetizers.meals[1].imageURL} />
                </Link>
                <Link to="">
                  <li>{Data.entrees.title}</li>
                  <img src={Data.entrees.meals[1].imageURL} />
                </Link>
                <Link to="">
                  <li>{Data.desserts.title}</li>
                  <img src={Data.desserts.meals[1].imageURL} />
                </Link>
                <Link to="">
                  <li>{Data.drinks.title}</li>
                  <img src={Data.drinks.meals[1].imageURL} />
                </Link>
              </ul>
            </section>

            <section className="dynamic-page">
              <Switch>
                <Route path="/" exact component={CategoriesList} />
              </Switch>
            </section>

            <section className="deals">
              <ul className="right-side-bar">
                <Link to="">
                  <li>Deal #1</li>
                  <img src={Data.appetizers.meals[2].imageURL} />
                </Link>
                <Link to="">
                  <li>Deal #2</li>
                  <img src={Data.entrees.meals[2].imageURL} />
                </Link>
                <Link to="">
                  <li>Deal #3</li>
                  <img src={Data.desserts.meals[2].imageURL} />
                </Link>
                <Link to="">
                  <li>Deal #4</li>
                  <img src={Data.drinks.meals[2].imageURL} />
                </Link>
              </ul>
            </section>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
