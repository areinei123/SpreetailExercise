import {connect} from 'react-redux'
import Content from '../components/Content.jsx'
import {fetchItems} from '../actions/furniture.js'
// import {navigateToPage} from '../actions/navigation.js'
// import {onSearchValueChange} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  items: state.furniture.items,
  itemFilter: state.filter,
  loadingItems: state.furniture.loadingItems
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClickDetails: (value) => dispatch(navigateToPage(value)),
  onClickAdd: (value) => dispatch(addItemToCart(value)),
  onFilterChange: (filter) => dispatch(fetchItems(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)