import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import {changeMaterialFilter} from '../actions/filter.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Material',
  options: [
    'cloth',
    'canvas',
    'wood',
    'metal',
    'porcelain'
  ],
  value: state.filter.materialFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (value) => dispatch(changeMaterialFilter(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)