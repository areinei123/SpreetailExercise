const furniture = (
  state = {
    items: [],
    loadingItems: false,
    loadingSingleItem: false,
    categoryFilter: false,
    priceFilter: false,
    colorFilter: false,
    materialFilter: false,
    pageError: false,
    errorMessage: ''
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
        items: actions.items,
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
        items: actions.items,
        loadingSingleItem: false
      }
    case 'REQUEST_SINGLE_ITEM_FAILURE':
      return {...state, 
        loadingSingleItem: false,
        pageError: true,
        errorMessage: action.message
      }
    case 'CHANGE_CATEGORY_FILTER':
      return {...state, 
        categoryFilter: action.category
      }
    case 'CHANGE_PRICE_FILTER':
      return {...state, 
        priceFilter: action.price
      }
    case 'CHANGE_MATERIAL_FILTER':
      return {...state, 
        materialFilter: action.material
      }
    default: 
      return state
  }
}