import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
const Warning = React.lazy(() => import('./warning'));


class App extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                Counter : {this.state.count || null}
                {this.state.count > 5 ? (
                    <React.Suspense fallback={null}>
                        <Warning />
                    </React.Suspense>
                ) : null}

                <button onClick={this.increment} > Increment </button>
                <button onClick={this.decrement} >Decrement </button>
            </div>
        )
    }
}

export default hot(module)(App);