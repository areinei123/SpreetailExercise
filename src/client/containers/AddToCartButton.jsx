import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
// import {addToCart} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Add to Cart',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: (item) => dispatch(newMovieDialog(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)