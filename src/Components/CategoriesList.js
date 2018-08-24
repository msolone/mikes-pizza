import React, { Component } from "react";
import Data from "../Data.json";
import {Link} from 'react-router-dom'


class CategoriesList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    this.setState({
      info: Data
    });
    // console.log(Data);
  }

  render() {
    return (
      <div>
        <ul className='category-ul'>
          {Object.keys(this.state.info).map((categoryKey, i) => {
            const food = this.state.info[categoryKey];
            // console.log(categoryKey);
            return (
            
              <div key={i}>
              <Link to={`./${categoryKey}`}>
                <h2>{food.title}</h2>
                <p>{food.motto}</p>
                <img src={food.meals[0].imageURL} alt={food.meals[0].title} className='category-images'/>
              </Link>  
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
