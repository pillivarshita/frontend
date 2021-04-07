const initialState = {
  payments: [],
  logins: [],
  users: [],
  colleges:[],
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "FIND_PAYMENTS":
      return { ...state, payments: payload, message: "" };

    case "FIND_APPLICATION":
      return { ...state, payments: payload, message: "" };

    case "FIND_PAYMENT":
      return { ...state, payments: payload, updatePayment: payload.payment };

    case "ADD_PAYMENT":
      return { ...state, payments: state.payments, message: payload.message };

    case "DELETE_PAYMENT":
      var filteredList = state.payments.filter(
        (payment) => payment.id !== payload.payment.id
      );
      return { ...state, payments: filteredList, message: "" };

    case "UPDATE_PAYMENT":
      console.log(payload.message);
      return { ...state, payments: state.payments, message: payload.message };

    case "FIND_USERS" :
        return {users : payload,message:''}

    case "FIND_USER" :
        return {users : payload,updateUser : payload.user}

    case "ADD_USER":
        return {users: state.users,message:payload.message}

    case "DELETE_USER":
        return { ...state, message: payload.message };

    case "UPDATE_USER":
        return { ...state, message: payload.message, users: state.users };

      case "FIND_LOGINS" :
        return {logins : payload,message:''}

    case "FIND_LOGIN" :
            return {logins : payload,updateLogin : payload.login}

    case "ADD_LOGIN":
        return {logins: state.users,message:payload.message}


    case "DELETE_LOGIN":
        return { ...state, message: payload.message };

    //  case "UPDATE_LOGIN":
    //   return { ...state, message: payload.message };   

    case "CHANGE_PASSWORD":
      return { ...state, message: payload.message};   
               
            // case "FIND_LOGIN" :
            // return {logins : payload,updateLogin : payload.login} 
       
                  
              case "FIND_COLLEGE" :
                  return {colleges : payload,message:''}
          
                  case "ADD_COLLEGE":
                      return {colleges: state.colleges,message:payload.message}
              
                      case "UPDATE_COLLEGE":
                          console.log(payload.message)
                              return {...state,colleges: state.colleges,message:payload.message}
          
              case "DELETE_COLLEGE":
                  var filteredList = state.colleges.filter((college)=> college.id !== payload.college.id)
                  return {colleges: filteredList,message:''}
                              
            

    default:
      return state;
  }
};

export default reducer;



