import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  RecoilRoot
} from 'recoil'

import StyleProvider from './providers/Style'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

const App = props => {
  return (
    <RecoilRoot>
      <StyleProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/session' component={LoginPage} />
          </Switch>
        </Router>
      </StyleProvider>
    </RecoilRoot>
  )
}

export default App
