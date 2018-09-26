import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, color, onClick, numberOfItems, item}) => {
  
  let cartAmount = {
    marginRight: '7px'
  }

  const onButtonClick = (event) => {
    item
      ? onClick(item)
      : onClick(event)
  }

  return (
    <button type="button"
      className={"btn btn-"+color+" btn-sm"}
      onClick={onButtonClick}
    >
      {label}
      {numberOfItems && 
        <span> - {numberOfItems}</span>
      }
    </button>
  )
}

export default Button
