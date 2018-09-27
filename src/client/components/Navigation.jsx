import React from 'react'
import CartButton from '../containers/CartButton.jsx'
import ItemFilters from '../components/ItemFilters.jsx'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between'>
      <a className='navbar-brand'>Furniture Emporium</a>
      <CartButton/> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span >Filter</span>
      </button>
      <div className='collapse navbar-collapse w-100 order-1 order-md-0' id='navbar'>
        <ItemFilters/>
      </div>
    </nav>
  )
}

export default Navigation