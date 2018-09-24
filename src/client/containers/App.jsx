import React from 'react'
import Navigation from '../components/Navigation.jsx'
import StatefulContent from '../containers/StatefulContent.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <React.Fragment>
        <h1>Furniture Emporium</h1>
        <Navigation/>
        <StatefulContent/>
      </React.Fragment>
    ) 
  }
}

export default App