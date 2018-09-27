import React from 'react'
import StatefulContent from '../containers/StatefulContent.jsx'
import Navigation from '../components/Navigation.jsx'
import StatefulCart from '../containers/StatefulCart.jsx'
import StatefulDialog from '../containers/StatefulDialog.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <React.Fragment>
        <Navigation/>
        <StatefulContent/>
        <StatefulCart/>
        <StatefulDialog/>
      </React.Fragment>
    ) 
  }
}

export default App