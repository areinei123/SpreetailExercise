import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {addToCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Add to Cart',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (item) => dispatch(addToCart(item, 1))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)