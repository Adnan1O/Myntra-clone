export const initialState = {
    user: localStorage.getItem("username") || null,
    isLoggedIn: !!localStorage.getItem("token")
  };
  

function reducer(state, action){
switch(action.type){
    case "LOG_IN":
        return{
            ...state,
            user:action.user,
            isLoggedIn: true
        }
}
}
export default reducer