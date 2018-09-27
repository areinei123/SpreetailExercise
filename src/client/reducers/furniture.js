import {find} from 'lodash'

const furniture = (
  state = {
    items: [],
    loadingItems: false,
    categoryFilter: false,
    priceFilter: false,
    colorFilter: false,
    materialFilter: false,
    pageError: false,
    errorMessage: '',
    showSingleItem: false
  },
  action
) => {
  switch(action.type){
    case 'REQUEST_ITEMS':
      return {...state, 
        loadingItems: true
      }
    case 'RECEIVE_ITEMS':
      return {...state,
        items: action.items,
        loadingItems: false
      }
    case 'REQUEST_ITEMS_FAILURE':
      return {...state, 
        loadingItems: false,
        pageError: true,
        errorMessage: action.message
      }
    case 'REQUEST_SINGLE_ITEM':
      return {...state,
        loadingSingleItem: true
      }
    case 'RECEIVE_SINGLE_ITEM':
      return {...state,
        showSingleItem: action.item,
        loadingSingleItem: false
      }
    case 'REQUEST_SINGLE_ITEM_FAILURE':
      return {...state, 
        loadingSingleItem: false,
        pageError: true,
        errorMessage: action.message
      }
    // case 'SHOW_SINGLE_ITEM':
    //   return {...state,
    //     showSingleItem: {
    //       item: find(state.items, {id: action.item})
    //     }
    //   }
    case 'HIDE_SINGLE_ITEM':
      return {...state,
        showSingleItem: false
      }
    case 'CHOOSE_ITEM_OPTION':
      return {...state,
        showSingleItem: {...state.showSingleItem, selectedOption: action.option}
      }
    default: 
      return state
  }
}

export default furniture