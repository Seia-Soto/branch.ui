import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import StyleProvider from './providers/Style'

import MainPage from './pages/MainPage'

const App = props => {
  return (
    <StyleProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </Router>
    </StyleProvider>
  )
}

export default App
