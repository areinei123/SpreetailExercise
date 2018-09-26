import React from 'react'
import PropTypes from 'prop-types'
import RemoveFromCartButton from '../containers/RemoveFromCartButton.jsx'
import CartQuantityInput from '../containers/CartQuantityInput.jsx'

const CartItem = ({item, onChangeQuantity}) => {
  return(
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>
          <h6>{item.name} - ${item.price}</h6>
        </div>
        <div>{item.color} / {item.material}</div>
        <CartQuantityInput id={item.id} value={item.cartQuantity}/>
        <RemoveFromCartButton/>
      </div>
    </div>
  )
}

export default CartItem