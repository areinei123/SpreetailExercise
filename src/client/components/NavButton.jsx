import React from 'react'
import PropTypes from 'prop-types'

const NavButton = ({label, color, onClick, numberOfItems, item}) => {
  
  let cartAmount = {
    marginRight: '7px'
  }

  let value = ''

  if(numberOfItems === 0 || numberOfItems){
    value = <span>({numberOfItems})</span>
  }

  return (
    <a className={"nav-link"} onClick={onClick}>
      {label}
      {value}
    </a>
  )
}

export default NavButton
