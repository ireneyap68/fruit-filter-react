import React, { Component } from 'react';
import List from './List'
import Input from './Input'

class FruitContainer extends Component {
    state = {
        // initialize the fruit list to the full list passed in props
        fruitsToDisplay: this.props.fruits,
        // initialize the filter value to an empty string
        // filterValue: ''
    }
        
    //design to change the value of the filterValue state 
    //this has to live in the same component as the state that it changes  
    handleFilterChange = (e)=>{
    // console.log(e.target.value)
        //remove fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter((f)=>{
            return f.toLowerCase().includes(e.target.value.toLowerCase())
        })
        //change the value
        this.setState({
            fruitsToDisplay: filteredFruitList
            // filterValue: e.target.value
        })
    }

    render(){
        return(
            <>
            <h1>hello from fruit container!</h1>
            <Input onChange={this.handleFilterChange} />
            <List fruits={this.state.fruitsToDisplay} />

            </>
        )
    }
}
export default FruitContainer