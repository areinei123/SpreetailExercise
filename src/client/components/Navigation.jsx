import React from 'react'
import CartButton from '../containers/CartButton.jsx'
import ItemFilters from '../components/ItemFilters.jsx'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between'>
      <h2>Furniture Emporium</h2>
      <CartButton/> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span >Filter</span>
      </button>
      <div className='collapse navbar-collapse' id='navbar'>
        <ItemFilters/>
      </div>
    </nav>
  )
}

export default Navigation