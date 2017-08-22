import update from 'immutability-helper';

//debugger
export const sendCommentReducer = (state="", action) => {
  switch(action.type){
    case "SEND_COMMENT":
        // debugger
        // var newComment = {...action.newComment}
        // return update(state.films[newComment.id], {
        //   comments: {$push:{
        //     "userName": newComment.username,
        //     "text": newComment.comment
        //   }}
        // })

        return action.comment;
        break;
      default:
        return state;
    }
}