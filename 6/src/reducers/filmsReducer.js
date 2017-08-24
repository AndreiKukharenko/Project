export const filmsReducer = (state = {}, action) => {
    switch(action.type){
      case "FILMS":
        return action.films;
      default:
       return state;
    }
}