import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

class App extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                Hello World!

                <button onClick={this.increment}>
                    Counter {this.state.count || null}
                </button>
            </div>
        )
    }
}

export default hot(module)(App);