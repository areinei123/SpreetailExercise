import {connect} from 'react-redux'
import QuantityInput from '../components/QuantityInput.jsx'
import {changeItemQuantity} from '../actions/cart.js'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (id, value) => dispatch(changeItemQuantity(id, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantityInput)