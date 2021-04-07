

const saveUser = () =>{

    return {type : "ADD_USER",payload : {message : "Successfully added user"}}

}

export const addUser = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/users', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveUser())
                }
            })
}}

const findUsers = (payload) =>{
    return {type : "FIND_USERS",payload}
}

export const fetchUser = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/users', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findUsers(data));
            })
        
    }

}


export const deleteuser = (msg) => {
    return { type: "DELETE_USER", payload: { message: msg }  }

}

export const deleteUser = (userId) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch("http://localhost:8075/users/" + userId, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    dispatch(fetchUser())
                    dispatch(deleteuser("Successfully deleted User!!"))
                }else {
                    console.log("RES", res)
                    dispatch(deleteuser("User deleted"))
                }
                // setTimeout(() => {
                //     dispatch(deleteUser(""));
                // }, 3000);
            })

    }
}

const updateUser = () =>{
console.log('inside update user')
    return {type : "UPDATE_USER",payload : {message : "Successfully updated user"}}

}

export const EditUser = (payload) =>{
     const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/users', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 202){
                    dispatch(updateUser("Successfully updated user !!!"));
                }else {
                    dispatch(updateUser("Updating user failed !!!"))
                }
            
            })
}}


// export const fetchUserBy_ID = (payload) => {
//     return { type: "VIEW_USER_ID", payload: payload }
// }


// export const fetchUserByID = (payload) => {
//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         fetch('http://localhost:8070/users/' + payload,requestOptions )
//             .then(res =>
//                 res.json()
//             )
//             .then(data => {
//                 dispatch(fetchUserBy_ID(data));
//             }).catch(
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }
// }

// const removeUser = (payload) =>{

//     return {type : "DELETE_USER",payload}

// }

// export const deleteUser = (id) =>{
//      const requestOptions = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         let message = ''
//         fetch("http://localhost:8070/users/" + id, requestOptions)
//             .then(res => {
//                 console.log(res)
                
//                 if(res.status === 200){
//                    message = 'succesfully deleted user'
//                 }
//                 else
//                 message = 'failed'

//                 return res.json()
//             }).then(data=>{
//                 console.log(data)
//                 dispatch(removeUser({user : data,message}))
//             })
            
// }}