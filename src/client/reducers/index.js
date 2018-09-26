import {combineReducers} from 'redux'
import furniture from './furniture.js'
import filter from './filter.js'
import cart from './cart.js'

export default combineReducers({
  furniture,
  filter,
  cart
})