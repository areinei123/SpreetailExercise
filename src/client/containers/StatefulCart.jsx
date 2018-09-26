import {connect} from 'react-redux'
import Cart from '../components/Cart.jsx'
// import {navigateToPage} from '../actions/navigation.js'
// import {onSearchValueChange} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  contents: state.cart.items,
  showCart: state.cart.showCart
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClickDetails: (value) => dispatch(navigateToPage(value)),
  // onClickAdd: (value) => dispatch(addItemToCart(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)