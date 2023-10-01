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
    case "LOG_OUT":
        return{
            ...state,
            user:null,
            isLoggedIn:false
        }
}
}
export default reducer