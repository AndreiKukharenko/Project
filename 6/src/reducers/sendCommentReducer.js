export const sendCommentReducer = (state = [], action) => {
  switch(action.type){
    case "SEND_COMMENT":
        //debugger
        return  {...action.newComment}
        break;
      default:
        return state;
    }
}