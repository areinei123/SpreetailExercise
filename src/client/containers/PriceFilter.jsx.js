import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown.jsx'
import {changePriceFilter} from '../actions/filter.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'Price',
  options: [
    '0-200',
    '200-500',
    '500-1000',
    '1000-1500',
    '1500-2000',
    '2000-4000',
    '4000-10000',
    '10000-20000'
  ],
  value: state.filter.priceFilter.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (value) => dispatch(changePriceFilter(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)