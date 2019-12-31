import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

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
        <b>Counter</b> :: {this.state.count || null}
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrement}>Decrement </button>
      </div>
    )
  }
}

export default hot(module)(App)
