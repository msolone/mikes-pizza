import React, { Component } from 'react';
import Data from "../Data.json";



class FoodDetail extends Component {

        constructor(props) {
            super(props);
            this.state = {
                list: {
                    meals:[],
                
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
        return (
            <div className='food-detail'>
                <h1>{Data[this.props.match.params.type].meals[this.props.match.params.index].title}</h1>
                <h3>{Data[this.props.match.params.type].meals[this.props.match.params.index].price}</h3>
                <img src={Data[this.props.match.params.type].meals[this.props.match.params.index].imageURL} 
                alt={Data[this.props.match.params.type].meals[this.props.match.params.index].title}
                />
                <h2>{Data[this.props.match.params.type].meals[this.props.match.params.index].description}</h2>
            </div>
        );
    }
}

export default FoodDetail;
