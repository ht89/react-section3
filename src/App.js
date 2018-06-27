import React, { Component } from 'react';

import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        users: [
            { username: 'Ironman', description: 'The man in a steel body armor' },
            { username: 'Hulk', description: 'The big muscular green guy' }
        ]
    };

    userChangeHandler = (event) => {
        this.setState({
            users: [
                { username: event.target.value, description: 'The man in a steel body armor' },
                { username: 'Hulk', description: 'The big muscular green guy' }
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <UserInput username={this.state.users[0].username} changed={this.userChangeHandler}/>

                <UserOutput username={this.state.users[0].username}>{this.state.users[0].description}</UserOutput>
                <UserOutput username={this.state.users[1].username}>{this.state.users[1].description}</UserOutput>
            </div>
        );
    }
}

export default App;
