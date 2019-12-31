import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './styles.css'
import ErrorBoundary from './DefaultErrorBoundary'

if (process.env.NODE_ENV == 'development') {
  require('react-axe')(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
