import {connect} from 'react-redux'
import ItemDialog from '../components/ItemDialog.jsx'
import {hideSingleItem} from '../actions/furniture.js'

const mapStateToProps = (state, ownProps) => ({
  item: state.furniture.showSingleItem
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeModal: () => dispatch(hideSingleItem())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDialog)