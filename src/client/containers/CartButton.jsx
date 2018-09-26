import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
// import {addToCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Cart',
  color: 'primary',
  numberOfItems: state.cart.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: (item) => dispatch(newMovieDialog(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)