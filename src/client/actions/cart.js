export function addToCart(item){
  item.cartQuantity = 1
  // Change so that we can check if it exists
  return{
    type: 'ADD_TO_CART',
    item: item
  }
}

export function removeFromCart(itemId){
  return{
    type: 'REMOVE_FROM_CART',
    id: itemId
  }
}

export function changeItemQuantity(itemId, quantity){
  return{
    type: 'CHANGE_QUANTITY',
    id: itemId,
    quantity: parseInt(quantity, 10)
  }
}

export function showCart(){
  return{
    type: 'SHOW_CART'
  }
}

export function hideCart(){
  return{
    type: 'HIDE_CART'
  }
}