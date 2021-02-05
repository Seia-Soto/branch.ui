import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers'

const persistConfig = {
  key: '_branch.ui',
  whitelist: [
    'user',
    'post'
  ],
  storage
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const enhancedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  enhancedReducer,
  {},
  composeEnhancers()
)
export const persistor = persistStore(store)
