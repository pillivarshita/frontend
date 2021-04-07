const initialState = {
  payments: [],
  logins: [],
  users: [],
  colleges:[],
  courses : [],
  branches:[],
  programs:[],
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
                  return {...state,colleges : payload,message:''}
          
                  case "ADD_COLLEGE":
                      return {...state,colleges: state.colleges,message:payload.message}
              
                      case "UPDATE_COLLEGE":
                          console.log(payload.message)
                              return {...state,colleges: state.colleges,message:payload.message}
          
              case "DELETE_COLLEGE":
                  var filteredList2 = state.colleges.filter((college)=> college.id !== payload.college.id)
                  return {...state,colleges: filteredList2,message:''}
                              
                  case "FIND_COURSES" :
                    return {courses : payload,message:''}
            
                case "FIND_COURSE" :
                        return {courses : payload,updateCourse : payload.course}
            
                case "ADD_COURSE":
                    return {courses: state.courses,message:payload.message}
            
                case "DELETE_COURSE":
                    console.log(payload)
                    var filteredList1 = state.courses.filter((course)=> course.courseId !== payload.course.courseId)
                    return {courses: filteredList1,message:''}
                // case "DELETE_COURSE":
                //     return { ...state, message: payload.message };
            
                case "UPDATE_COURSE":
                    console.log(payload.message)
                        return {courses: state.courses,message:payload.message}
            
                case "FIND_BRANCHES" :
                    return {branches : payload,message:''}
                case "FIND_BRANCH" :
                    return {branches : payload,updateBranch : payload.branch}
                        
                            // case "FIND_USER" :
                            //         return {users : payload,updateUser : payload.user}
                        
                case "ADD_BRANCH":
                    return {branches : state.branches,message:payload.message}
                        
                case "DELETE_BRANCH":
                    filteredList = state.branches.filter((branch)=> branch.branchId !== payload.branch.branchId)
                        return {branch: filteredList,message:''}
                        
                case "UPDATE_BRANCH":
                    console.log(payload.message)
                        return {branches: state.branches,message:payload.message}
            
                case "FIND_PROGRAMS" :
                    return {programs : payload,message:''}
            
                case "FIND_PROGRAM" :
                    return {programs : payload,updateProgram : payload.program}
                        
                            // case "FIND_USER" :
                            //         return {users : payload,updateUser : payload.user}
                        
                case "ADD_PROGRAM":
                    return {programs : state.programs,message:payload.message}
                        
                case "DELETE_PROGRAM":
                    filteredList = state.programs.filter((program)=> program.programId !== payload.program.programId)
                        return {program: filteredList,message:''}
                        
                case "UPDATE_PROGRAM":
                    console.log(payload.message)
                        return {programs: state.programs,message:payload.message}
                
                        case "FIND_PROGRAMSCHEDULES" :
                            return {programSchedules : payload,message:''}
                    
                        case "FIND_PROGRAMSCHEDULED" :
                            return {programSchedules : payload,updateProgramScheduled : payload.programScheduled}
                                
                                    // case "FIND_USER" :
                                    //         return {users : payload,updateUser : payload.user}
                                
                        case "ADD_PROGRAMSCHEDULED":
                            return {programSchedules : state.programSchedules,message:payload.message}
                                
                        case "DELETE_PROGRAMSCHEDULED":
                            filteredList = state.programSchedules.filter((programScheduled)=> programScheduled.scheduleId !== payload.programScheduled.scheduleId)
                                return {programScheduled: filteredList,message:''}
                                
                        case "UPDATE_PROGRAMSCHEDULED":
                            console.log(payload.message)
                                return {programSchedules: state.programSchedules,message:payload.message}        
                        

    default:
      return state;
  }
};

export default reducer;



