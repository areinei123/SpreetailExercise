import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {showSingleItem} from '../actions/furniture.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'More Info',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (itemId) => dispatch(showSingleItem(itemId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)