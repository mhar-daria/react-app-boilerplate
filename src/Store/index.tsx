import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Middleware,
  Store,
} from 'redux'
import reducers from 'reducers'
import rootSaga from 'sagas'
import middleware, { sagaMiddleware } from './middleware'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootReducer = combineReducers(reducers)
const composeEnhancer =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose

export const configureStore = (
  initialState: any = {},
  additionalMiddleware: Middleware[] = []
) => {
  const store: Store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...additionalMiddleware, ...middleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export type RootState = ReturnType<typeof configureStore>
