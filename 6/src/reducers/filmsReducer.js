const filmsReducer = (state = {}, action) => {
    switch(action.type){
      case "FILMS":
        return {...state, films: action.films};
        break;
      default:
       return state;
    }
}

export default filmsReducer;