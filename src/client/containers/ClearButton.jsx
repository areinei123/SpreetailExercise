import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {clearFilter} from '../actions/filter.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Clear',
  color: 'warning'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(clearFilter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)