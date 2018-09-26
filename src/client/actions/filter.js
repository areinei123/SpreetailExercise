export function changePriceFilter(value) {
  let priceRegex = /(\d*)-(\d*)/gm
  let priceRange = priceRegex.exec(value)

  return {
    type: 'CHANGE_PRICE_FILTER',
    priceFilter: {
      min: parseInt(priceRange[1], 10),
      max: parseInt(priceRange[2], 10),
      value: value
    }
  }
}

export function changeCategoryFilter(value) {
  return {
    type: 'CHANGE_CATEGORY_FILTER',
    categoryFilter: value
  }
}

export function changeMaterialFilter(value) {
  return {
    type: 'CHANGE_MATERIAL_FILTER',
    materialFilter: value
  }
}

export function changeColorFilter(value) {
  return {
    type: 'CHANGE_COLOR_FILTER',
    colorFilter: value
  }
}

export function clearFilter(){
  return{
    type: 'CLEAR_FILTER'
  }
}
