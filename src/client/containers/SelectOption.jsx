import {connect} from 'react-redux'
import OptionCard from '../components/OptionCard.jsx'
import {chooseOption} from '../actions/furniture.js'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (option) => dispatch(chooseOption(option))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionCard)