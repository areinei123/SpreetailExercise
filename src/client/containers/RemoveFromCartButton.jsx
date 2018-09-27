import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {removeFromCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Remove',
  color: 'danger'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (item) => dispatch(removeFromCart(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)