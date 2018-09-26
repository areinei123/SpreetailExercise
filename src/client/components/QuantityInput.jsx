import React from 'react'

const QuantityInput = ({id, value, onChange}) => {
  const onValueChange = (event) => {
    onChange(id, event.target.value)
  }

  return (
    <span>
      Quantity: <input type='number' value={value} onChange={onValueChange}/>
    </span>
  )
}

export default QuantityInput
