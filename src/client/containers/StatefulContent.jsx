import {connect} from 'react-redux'
import Content from '../components/Content.jsx'
import {navigateToPage} from '../actions/navigation.js'
// import {onSearchValueChange} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onChange: (value) => dispatch(onSearchValueChange(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)