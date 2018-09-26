import React from 'react'

const Loading = () => {
  let style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'hsla(0, 0%, 55%, 0.6)'
  }

  let loadingSpinner = {}

  return(
    <div style={style}>
      <div style={loadingSpinner}></div>
    </div>
  )
}

export default Loading