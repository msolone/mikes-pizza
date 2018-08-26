import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoriesList from "./Components/CategoriesList";
import FoodList from "./Components/FoodList";
import Data from "./Data.json";
import FoodDetail from "./Components/FoodDetail";
import Pagination from "react-js-pagination";


// const ALPHABET = ['a','c','d','e','f','g','h','i','j','k']
// const PAGE_SIZE = 2

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activePages: 15,
  //     currentPage: [],
  //     activePage:0
  //   };
  // }

//   componentDidMount () {
//     this.setState({
//       currentPage: Data['appetizers'].meals.slice(0,PAGE_SIZE)
//     })
//   }

//   handlePageChange = (pageNumber) => {
//     console.log(`active page is ${pageNumber}`);
//     const last = pageNumber * PAGE_SIZE;
//     const first = last - PAGE_SIZE;
//     const current = Data['appetizers'].meals.slice(first, last);
//     console.log({current, first, last})
//     this.setState({ activePage: pageNumber, currentPage:current });
//   }

  render() {
    console.log(Data['appetizers'].meals)
    return (
      <Router>
        <section className="perma-page">
          <section className="header">
            <a href='http://localhost:3000'><h1>Mike's Pizza</h1></a>
           {/* current:page: {this.state.activePage}
            {this.state.currentPage.map((item, i) => {
              return <div key={i}>{item}</div>
            })}
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={PAGE_SIZE}
              totalItemsCount={Data['appetizers'].meals.length}
              pageRangeDisplayed={2}
              onChange={this.handlePageChange}
            /> */}
          </section>
          <section className="body">
            <section className="categories">
              <ul className="left-side-bar">
                <a href="http://localhost:3000/appetizers">
                  <li>{Data.appetizers.title}</li>
                  <img src={Data.appetizers.meals[1].imageURL} alt="food" />
                </a>
                <a href="http://localhost:3000/entrees">
                  <li>{Data.entrees.title}</li>
                  <img src={Data.entrees.meals[1].imageURL} alt="food" />
                </a>
                <a href="http://localhost:3000/desserts">
                  <li>{Data.desserts.title}</li>
                  <img src={Data.desserts.meals[1].imageURL} alt="food" />
                </a>
                <a href="http://localhost:3000/drinks">
                  <li>{Data.drinks.title}</li>
                  <img src={Data.drinks.meals[1].imageURL} alt="food" />
                </a>
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
                <a href="http://localhost:3000/deals/0">
                  <li>Deal #1</li>
                  <img
                    src={
                      Data.deals.meals[0]
                        .imageURL
                    }
                    alt="food"
                  />
                </a>
                <a href="http://localhost:3000/deals/1">
                  <li>Deal #2</li>
                  <img
                    src={
                      Data.deals.meals[1].imageURL
                    }
                    alt="food"
                  />
                </a>
                <a href="http://localhost:3000/deals/2">
                  <li>Deal #3</li>
                  <img
                    src={
                      Data.deals.meals[2]
                        .imageURL
                    }
                    alt="food"
                  />
                </a>
                <a href="http://localhost:3000/deals/3">
                  <li>Deal #4</li>
                  <img
                    src={
                      Data.deals.meals[3].imageURL
                    }
                    alt="food"
                  />
                </a>
              </ul>
            </section>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
