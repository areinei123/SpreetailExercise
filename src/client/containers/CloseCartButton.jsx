import React from 'react'
import {connect} from 'react-redux'
import {hideCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(hideCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({onClick}) => (
    <button type="button" className="close" aria-label="Close" onClick={onClick}>
      <span aria-hidden="true">&times;</span>
    </button>
  )
)


