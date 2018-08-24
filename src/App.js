import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList";
import FoodList from './Components/FoodList';
import Data from "./Data.json";
import FoodDetail from "./Components/FoodDetail";


class App extends Component {
  render() {
    // console.log(Data.drinks.meals[0]);
    return (
      <Router>
        <section className="perma-page">
          <section className="header">
            <h1>Mike's Pizza</h1>
          </section>
          <section className="body">
            <section className="categories">
              <ul className="left-side-bar">
                <Link to="./appetizers">
                  <li>{Data.appetizers.title}</li>
                  <img src={Data.appetizers.meals[1].imageURL} alt='food' />
                </Link>
                <Link to="./entrees">
                  <li>{Data.entrees.title}</li>
                  <img src={Data.entrees.meals[1].imageURL} alt='food' />
                </Link>
                <Link to="./desserts">
                  <li>{Data.desserts.title}</li>
                  <img src={Data.desserts.meals[1].imageURL} alt='food' />
                </Link>
                <Link to="./drinks">
                  <li>{Data.drinks.title}</li>
                  <img src={Data.drinks.meals[1].imageURL} alt='food' />
                </Link>
              </ul>
            </section>

            <section className="dynamic-page">
              <Switch>
                <Route path="/" exact component={CategoriesList} />
                <Route path="/:type" exact component={FoodList} />
                <Route path="/:type/:index" exact component={FoodDetail} />
              </Switch>
            </section>

            <section className="deals">
              <ul className="right-side-bar">
                <Link to="">
                  <li>Deal #1</li>
                  <img src={Data.appetizers.meals[Math.floor(Math.random() * 4)].imageURL} alt='food' />
                </Link>
                <Link to="">
                  <li>Deal #2</li>
                  <img src={Data.entrees.meals[Math.floor(Math.random() * 4)].imageURL} alt='food' />
                </Link>
                <Link to="">
                  <li>Deal #3</li>
                  <img src={Data.desserts.meals[Math.floor(Math.random() * 4)].imageURL} alt='food' />
                </Link>
                <Link to="">
                  <li>Deal #4</li>
                  <img src={Data.drinks.meals[Math.floor(Math.random() * 4)].imageURL} alt='food' />
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
