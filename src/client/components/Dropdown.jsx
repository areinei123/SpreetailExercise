import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({label, options, value, onClick}) => {

  const onFilterClick = (event) => {
    onClick(event.target.innerText)
  }

  return (
    <li className='nav-item dropdown' style={{margin: '0 10px'}}>
      <div className='dropdown' style={{position: 'relative'}}>
        <a className='nav-link dropdown-toggle' id={label+'dropdown'}
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          style={{position: 'relative'}}
        >
        {value ? value : label}
        </a>
        <div className='dropdown-menu' aria-labelledby={label+'dropdown'} style={{position: 'absolute'}}>
          {options.map((option, key) => 
            <span key={key} className='dropdown-item' onClick={onFilterClick}>{option}</span>
          )}
        </div>
      </div>
    </li>
  )
}

export default Dropdown