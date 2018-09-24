export function requestItems(){
  return {
    type: 'REQUEST_ITEMS'
  }
}

export function receiveItems(data){
  return {
    type: 'RECEIVE_ITEMS',
    items: data,
  }
}

export function fetchItems(){
  return function(dispatch){
    dispatch(requestItems())

    let request = fetch('/api/movies')

    return request
    .then(
      response => response.json(),
      error => dispatch(requestItemsError(error))
    )
    .then( json => dispatch(receiveItems(json.data)))
  }
}

export function requestItemsError(error){
  return {
    type: 'REQUEST_ITEMS_FAILURE',
    message: error
  }
}

export function changeCategoryFilter(category){
  return {
    type: 'CHANGE_CATEGORY_FILTER',
    category: category
  }
}

export function changePriceFilter(price){
  return {
    type: 'CHANGE_PRICE_FILTER',
    price: price
  }
}

export function changeMaterialFilter(material){
  return {
    type: 'CHANGE_MATERIAL_FILTER',
    material: material
  }
}