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
import PrivateRoute from './providers/PrivateRoute'

import MainPage from './pages/MainPage'
import SessionPage from './pages/SessionPage'
import RegisterationPage from './pages/RegisterationPage'
import SessionExpirationPage from './pages/SessionExpirationPage'
import SessionRemovalPage from './pages/SessionRemovalPage'
import ProfilePage from './pages/ProfilePage'

const { store, persistor } = configureStore()

const App = props => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <StyleProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <PrivateRoute exact path='/profile' component={ProfilePage} />
              <Route exact path='/session' component={SessionPage} />
              <Route exact path='/session/create' component={RegisterationPage} />
              <Route exact path='/session/finish' component={SessionRemovalPage} />
              <PrivateRoute exact path='/session/expire' component={SessionExpirationPage} />
            </Switch>
          </Router>
        </StyleProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
