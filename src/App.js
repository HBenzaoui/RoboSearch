import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})        
    }

    render(){
        const filtredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
        return(
            <div className='tc'>
                <h1 className='f1'>Robo Search</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots ={filtredRobots}/>
            </div>
        );
    }
    
}

export default App;