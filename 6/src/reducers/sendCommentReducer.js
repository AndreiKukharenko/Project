export const sendCommentReducer = (state = "", action) => {
    switch(action.type){
      case "SEND_COMMENT":
        return action.comment;
        break;
      default:
       return state;
    }
}