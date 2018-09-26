import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import {changeCategoryFilter} from '../actions/filter.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Department',
  options: [
    'sofa',
    'chair',
    'bed frame',
    'table',
    'dresser',
    'bookcase',
    'mirror',
    'light'
  ],
  value: state.filter.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (value) => dispatch(changeCategoryFilter(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)