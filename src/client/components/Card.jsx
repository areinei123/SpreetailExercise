import React from 'react'
import PropTypes from 'prop-types'
import AddToCartButton from '../containers/AddToCartButton.jsx'
import ItemDetailsButton from '../containers/ItemDetailsButton.jsx'
import find from 'lodash'

const Card = ({item}) => {
  let container = {
    margin: '10px',
    minWidth: '300px',
    maxWidth: '600px',
    flex: 1
  }

  let cardSpacing = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  let imageStyle = {
    width: '100%',
    height: window.innerWidth < 600 ? '40vw' : '20vw',
    objectFit: 'cover',
  }

  return(
    <div className='card border col-lg-4 d-flex align-items-stretch'>
      <img className='card-img-top' style={imageStyle} src={item.selectedOption.image}/>
      <div className='card-body'>
        <div style={cardSpacing}>
          <h5 className='card-title'>{item.name}</h5>
          <p className='card-text'>${item.price}</p>
        </div>
        <div style={cardSpacing}>
          <ItemDetailsButton item={item.id}/>
          <AddToCartButton item={item}/>
        </div>
      </div>
    </div>  
  )
}

export default Card