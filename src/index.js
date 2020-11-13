import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

//ReactDOM.render(<App />, document.getElementById('root'))

const store = createStore(reducer ,middleware) // store create

ReactDOM.render(
    // The Provider component makes it possible for all components to access the store via the connect() function.
  <Provider store={store}> 
    <App />
  </Provider>,
document.getElementById('root')
) 