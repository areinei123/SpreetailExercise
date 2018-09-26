import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem.jsx'
import CloseCartButton from '../containers/CloseCartButton.jsx'

const Cart = ({contents, showCart}) => {
  let cartContainer = {
    position: 'fixed',
    zIndex: '10',
    top: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'white',
    width: window.innerWidth < 600 ? '50%' : '30%',
    borderLeft: '1px solid lightgray',
    boxShadow: '-2px 0px 8px grey'
  }

  let header = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    showCart 
    ? <div className='card' style={cartContainer}>
        <div className='card-body'>
          <span style={header}>
            <h5 className='card-title'>Your Cart:</h5>
            <CloseCartButton/>
          </span>
          <div className='card-text'>
            {contents.length > 0
              ? contents.map((item,key) => 
                <CartItem item={item} key={key}/>
              )
              : <span>Nothing in your cart!</span>
            }
          </div>
        </div>
      </div>
    : <React.Fragment/>
    )
}

export default Cart