import React from 'react'
import propTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  static getDerivedStateFromError() {
    return {
      error: true
    }
  }

  render() {
    const { error } = this.state
    const { children } = this.props
    if (error) {
      return <h3>Something went wrong</h3>
    } else return { ...children }
  }
}

export default ErrorBoundary
