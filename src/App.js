import React, { Component } from 'react';

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

export default App;