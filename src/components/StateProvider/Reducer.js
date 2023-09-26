export const initialState = {
    user: localStorage.getItem("username") || null,
    isLoggedIn: !!localStorage.getItem("token") && localStorage.getItem("token") !== "null",
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