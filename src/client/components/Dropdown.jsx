import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({label, options, value, onClick}) => {

  const onFilterClick = (event) => {
    onClick(event.target.innerText)
  }

  return (
    <li className='nav-item' style={{margin: '0 10px'}}>
      <div className='dropdown' style={{position: 'relative'}}>
        <button className='btn btn-secondary btn-sm dropdown-toggle' id={label+'dropdown'}
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          style={{position: 'relative'}}
        >
        {value ? value : label}
        </button>
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