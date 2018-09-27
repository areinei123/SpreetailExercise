import React from 'react'
import Card from './Card.jsx'
import Loading from './Loading.jsx'
import {fetchItems} from '../actions/furniture.js'
import {dispatch} from 'redux'
import {filter} from 'lodash'

let itemContainerStyle = {
    display: 'flex',
    flexDirection: 'flex-row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '100%'
  }

class Content extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.itemFilter !== this.props.itemFilter){
      this.props.onFilterChange(this.props.itemFilter)
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.props.loadingItems 
        ? <Loading/>
        : <div className='row mx-3'>
            {this.props.items.length > 0
            ? this.props.items.map((item, key) =>
                <Card item={{...item, selectedOption: item.options[0]}} key={key}/>
              )
            : <div className="container alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Oh no!</strong> Looks like that query didn't return any results. Try a different filter result or clear them.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            }
          </div>
        }
      </React.Fragment>
    )
  }
}

export default Content