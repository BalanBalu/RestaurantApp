import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import user from '../modules/provider/restaurant.reducer';
const rootReducer = combineReducers({
  user,
  
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
)
