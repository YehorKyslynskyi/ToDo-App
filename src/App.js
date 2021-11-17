import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Routing from './Components/Routing/Routing'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  )
}

export default App
