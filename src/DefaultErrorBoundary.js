import React from "react"
import propTypes from "prop-types"

class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError ", error)
    return {
      error: true
    }
  }

  componentDidCatch(err, errInfo) {
    console.log("componentDidCatch " + err + " " + errInfo)
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
