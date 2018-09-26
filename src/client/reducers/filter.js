const filter = (
  state = {
    categoryFilter: false,
    priceFilter: {value: false},
    materialFilter: false,
    colorFilter: false
  },
  action
) => {
  switch(action.type){
    case 'CHANGE_CATEGORY_FILTER':
      return {...state, 
        categoryFilter: action.categoryFilter
      }
    case 'CHANGE_PRICE_FILTER':
      return {...state, 
        priceFilter: action.priceFilter
      }
    case 'CHANGE_MATERIAL_FILTER':
      return {...state, 
        materialFilter: action.materialFilter
      }
    case 'CHANGE_COLOR_FILTER':
      return {...state, 
        colorFilter: action.colorFilter
      }
    case 'CLEAR_FILTER':
      return {...state,
        categoryFilter: false,
        priceFilter: {value: false},
        materialFilter: false,
        colorFilter: false
      }
    default:
      return state
  }
}

export default filter