const navigation = (
  state = {
    page: 'home' // Add for potential sinlge item in url
  },
  action
) => {
  switch(action.type){
    case 'NAVIGATE_TO_PAGE':
      return {...state, 
        page: action.page,
        lastPage: state.page
      }
    default:
      return state
  }
}

export default navigation