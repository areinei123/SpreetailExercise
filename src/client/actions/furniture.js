export function requestItems(){
  return {
    type: 'REQUEST_ITEMS'
  }
}

export function receiveItems(data){
  data.forEach(item => item.price = parseInt(item.price, 10))
  return {
    type: 'RECEIVE_ITEMS',
    items: data,
  }
}

export function fetchItems(filter){
  return function(dispatch){
    dispatch(requestItems())

    let params = [
      filter.priceFilter.value ? 'min='+filter.priceFilter.min : 'min=0',
      filter.priceFilter.value ? 'max='+filter.priceFilter.max : 'max=10000000',
      filter.categoryFilter ? 'category='+filter.categoryFilter : 'category=any',
      filter.colorFilter ? 'color='+filter.colorFilter : 'color=any',
      filter.materialFilter ? 'material='+filter.materialFilter : 'material=any'
    ].join('&')

    let request = fetch('/api/furniture?'+params)

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

export function showSingleItem(itemId){
  $('#myModal').modal('show')
  return function(dispatch){
    let request = fetch('/api/furniture/'+itemId)

    return request
    .then(
      response => response.json(),
      error => dispatch(requestSingleItemError(error))
    )
    .then( json => dispatch(receiveSingleItem(json.data)))
  }
}

export function receiveSingleItem(data){
  return {
    type: 'RECEIVE_SINGLE_ITEM',
    item: data
  }
}

export function requestSingleItemError(error){
  return {
    type: 'REQUEST_SINGLE_ITEM_FAILURE',
    message: error
  }
}

export function hideSingleItem(){
  return {
    type: 'HIDE_SINGLE_ITEM'
  }
}

export function chooseOption(option){
  return {
    type: 'CHOOSE_ITEM_OPTION',
    option: option
  }
}