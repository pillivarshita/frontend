const saveLogin = () =>{

    return {type : "ADD_LOGIN",payload : {message : "Successfully added login"}}

}

export const addLogin = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/login', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveLogin())
                }
            })
}}

const findLogin = (payload) =>{
    return {type : "FIND_LOGIN",payload}
}

export const fetchLogin = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/login', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findLogin(data));
            })
        
    }

 }


const changePassword = () =>{
console.log('inside login')
    return {type : "CHANGE_PASSWORD",payload : {message : "Successfully changed password"}}

}

export const ChangePassword = (user) =>{
    console.log(user)
     const requestOptions = {
        method: 'PUT',
        //headers:{"Access-Control-Allow-Origin": "*"},
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return dispatch => {
        fetch('http://localhost:8075/loginchangePassword/'+ user.userId  , requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 200){
                    dispatch(changePassword("Successfully changed password !!!"));
                }else {
                    dispatch(changePassword("Changing password failed !!!"))
                }
            
            })
}}



//  export const changePassword = (msg) =>{
//     return {type : "CHANGE_PASSWORD",payload : {message : msg }}

// }

// export const EditLogin = (userId) =>{
//      const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
       
//     };
//     return dispatch => {
//         fetch("http://localhost:8070/loginchangePassword/" + userId, requestOptions)
//             .then(res => {
//                 if (res.status === 200) {
                    
//                     dispatch(fetchLogin())
                    

//                 .then(Res => {
//                     if(res.status === 200){
//                         dispatch(deleteLogin())

//                     }
//                 })    
//                     dispatch(changePassword("Successfully changed password!!"))
//                 }else {
//                     console.log("RES", res)
//                     dispatch(changePassword("Password changed"))
//                 }
            
//             })
// }}

 
// const changePassword = () =>{
// console.log('inside update login')
//     return {type : "UPDATE_LOGIN",payload : {message : "Successfully changed password"}}

// }

// export const EditLogin = (userId) =>{
//      const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userId)
//     };
//     return dispatch => {
//         fetch('http://localhost:8070/loginchangePassword'+userId, requestOptions)
//             .then(res => {
//                 console.log(res)
//                 // console.log(res.json())
//                 if(res.status === 202){
//                     dispatch(changePassword("Successfully changed password !!!"));
//                 }else {
//                     dispatch(changePassword("changing password failed !!!"))
//                 }
            
//             })
// }}
// const changePassword = () =>{
// console.log('inside change password')
//     return {type : "CHANGE_PASSWORD",payload : {message : "Successfully changed password"}}

// }

// export const EditPassword = (payload) =>{
//      const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     };
//     return dispatch => {
//         fetch('http://localhost:8070/loginchangePassword' , requestOptions)
//             .then(res => {
//                 console.log(res)
//                 // console.log(res.json())
//                 if(res.status === 202){
//                     dispatch(changePassword("Successfully changed password !!!"));
//                 }else {
//                     dispatch(changePassword("Changing password failed !!!"))
//                 }
            
//             })
// }}




export const deletelogin = (msg) => {
    return { type: "DELETE_LOGIN", payload: { message: msg }  }

}

export const deleteLogin = (userId) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch("http://localhost:8075/login/" + userId, requestOptions)
            .then(res => {
                if (res.status === 200) {
                    dispatch(fetchLogin())
                    dispatch(deletelogin("Successfully deleted Login!!"))
                }else {
                    console.log("RES", res)
                    dispatch(deletelogin("Login deleted"))
                }
                // setTimeout(() => {
                //     dispatch(deleteUser(""));
                // }, 3000);
            })

    }
}
