import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
// import {navigateToPage} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'More Info',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: (value) => dispatch(navigateToPage(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)