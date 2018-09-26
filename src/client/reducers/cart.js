import {includes, find} from 'lodash'

const cart = (
  state = {
    items: [],
    showCart: false
  },
  action
) => {
  switch(action.type){
    case 'ADD_TO_CART':
    // Change so that we can check if it exists
      if(includes(state.items, {id: action.item.id})){
        return state.items.map(item => 
          (item.id === action.item.id)
            ? {...item, cartQuantity: item.cartQuantity++}
            : item
        )
      }
      else {
        return {
          ...state,
          items: [...state.items, action.item]
        }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: [...state.items, state.items.filter(item => item.id !== action.id)]
      }
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          (item.id === action.id)
            ? {...item, cartQuantity: action.quantity}
            : item
          )
      }
      
    case 'SHOW_CART':
      return {...state, showCart: true}
    case 'HIDE_CART':
      return {...state, showCart: false}
    default: 
      return state
  }
}

export default cart