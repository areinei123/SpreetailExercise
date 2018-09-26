import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import {changeColorFilter} from '../actions/filter.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Color',
  options: [
    'white',
    'gray',
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  value: state.filter.colorFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (value) => dispatch(changeColorFilter(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)