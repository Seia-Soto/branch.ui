import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store'

import StyleProvider from './providers/Style'

import MainPage from './pages/MainPage'
import SessionPage from './pages/SessionPage'
import RegisterationPage from './pages/RegisterationPage'

const { store, persistor } = configureStore()

const App = props => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <StyleProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/session' component={SessionPage} />
              <Route exact path='/session/create' component={RegisterationPage} />
            </Switch>
          </Router>
        </StyleProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
