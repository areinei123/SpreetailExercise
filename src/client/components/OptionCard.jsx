import React from 'react'

const OptionCard = ({option, onClick}) => {
  const onClickOption = (event) => {
    onClick(option)
  }

  return (
    <div className="card" onClick={onClickOption}>
      <div className="card-body">
        <img src={option.image} width='50'/>
        <span> {option.material} / {option.color} </span>
      </div>
    </div>
  )
}

export default OptionCard