import React from 'react'
import PriceFilter from '../containers/PriceFilter.jsx'
import CategoryFilter from '../containers/CategoryFilter.jsx'
import MaterialFilter from '../containers/MaterialFilter.jsx'
import ColorFilter from '../containers/ColorFilter.jsx'
import ClearButton from '../containers/ClearButton.jsx'

const ItemFilters = ({}) => {
  let style = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  return (
    <ul className='navbar-nav mr-auto' style={style}>
      <PriceFilter/>
      <CategoryFilter/>
      <MaterialFilter/>
      <ColorFilter/>
      <ClearButton/>
    </ul>
  )
}

export default ItemFilters