export const filmsReducer = (state = {}, action) => {
    switch(action.type){
      case "FILMS":
        return action.films;
        break;
      default:
       return state;
    }
}