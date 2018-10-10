import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    
    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filtredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
         <h1>Loading</h1> :
         (
                <div className='tc'>
                    <h1 className='f1'>Robo Search</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots ={filtredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);