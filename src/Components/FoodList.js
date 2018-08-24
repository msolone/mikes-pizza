import React, { Component } from 'react';
import Data from "../Data.json";
import {Link} from 'react-router-dom'

class FoodList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: {
                meals:[]
            }
        }
    }

    componentDidMount() {
        this.setState({
            list: Data[this.props.match.params.type]
        })
        console.log(Data[this.props.match.params.type])
    }
    
   
    render() {
        console.log(this.state.list.meals)
        return (
            <div>
                <ul className='food-list-ul'>
                    {this.state.list.meals.map((meal, i) => {
                        return (
                            <Link to={`./${this.props.match.params.type}/${i}`} key={i}>
                            <h1>{meal.title}</h1>
                            <p>{meal.description}</p>
                            <img src={meal.imageURL} alt={meal.title} className='food-list-images'/>
                            </Link>
                        )
                    })}

                </ul>
                
                
            </div>
        );
    }
}

export default FoodList;
