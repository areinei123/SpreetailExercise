import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, color, onClick, numberOfItems}) => {
  
  let cartAmount = {
    marginRight: '7px'
  }

  return (
    <button type="button"
      className={"btn btn-"+color+" btn-sm"}
      onClick={onClick}
    >
      {label}
      {numberOfItems && 
        <span> - {numberOfItems}</span>
      }
    </button>
  )
}

export default Button
