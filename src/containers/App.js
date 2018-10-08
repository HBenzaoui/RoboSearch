import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './App.css';



class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

        
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})        
    }

    
    render(){
        const { robots, searchField} = this.state;
        const filtredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
         <h1>Loading</h1> :
         (
                <div className='tc'>
                    <h1 className='f1'>Robo Search</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots ={filtredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    
}

export default App;