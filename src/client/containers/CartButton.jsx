import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {showCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Cart',
  color: 'primary',
  numberOfItems: state.cart.items.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(showCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)