const saveBranch = () =>{

    return {type : "ADD_BRANCH",payload : {message : "Successfully added a branch"}}

}


export const addBranch = (payload) =>{
    const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(payload)
   };
   return dispatch => {
       fetch('http://localhost:8075/branches', requestOptions)
           .then(res => {
               console.log(res)
               if(res.status === 201){
                   console.log("success");
                   dispatch(saveBranch())
               }
           })
}}

const findBranch = (payload) =>{
   return {type : "FIND_BRANCH",payload}
}

export const fetchBranches = () => {

   const requestOptions = {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' }
   };
   return dispatch => {
       fetch('http://localhost:8075/branches', requestOptions)
           .then(res => {
               console.log(res);
               return res.json();
           })
           .then(data => {
               console.log(data);
               dispatch(findBranch(data));
           })
       
   }

}

 const removeBranch = (branch) =>{
    return { type: "DELETE_BRANCH", payload: { message: "Successfully deleted",branch:branch }  }
}

export const deleteBranch = (branchId) =>{
    const requestOptions = {
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json' }
   };
   return dispatch => {
    //    let message = ''
       fetch("http://localhost:8075/deleteBranchById/" + branchId, requestOptions)
           .then(res => {
            //    console.log(res)              
               if(res.status === 200){
                dispatch(fetchBranches())
                dispatch(removeBranch({branchId:branchId}))
                //   message = 'succesfully deleted branch'
               }
               else{
               console.log("RES", res)
               dispatch(removeBranch({branchId:branchId}))
            }
             
           
})
   }
}
export const updateBranch = () =>{
   console.log('inside update branch')
       return {type : "UPDATE_BRANCH",payload : {message : "Successfully updated branch"}}
   
   }
   
   export const EditBranch = (payload) =>{
    //    console.log(branch)
        const requestOptions = {
           method: 'PUT',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload)
       };
       return dispatch => {
           fetch('http://localhost:8075/branches', requestOptions)
               .then(res => {
                   console.log(res)
                   if(res.status === 202){
                    dispatch(updateBranch("successfully updated course!!!"))
                }
                else{
                    dispatch(updateBranch("Updating course failed!!!"))
                }    
               })
   }}

// export const addBranch = (payload) =>{
//      const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     };
//     return dispatch => {
//         fetch('http://localhost:8075/branches', requestOptions)
//             .then(res => {
//                 console.log(res)
//                 // console.log(res.json())
//                 if(res.status === 201){
//                     console.log("success");
//                     dispatch(saveBranch())
//                 }
//             })
// }}

// const findBranch = (data) =>{
//     return {type : "FIND_BRANCH",payload:(data)}
// }

// export const fetchBranch = () => {

//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         fetch('http://localhost:8075/branches', requestOptions)
//             .then(res => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 dispatch(findRoom(data));
//             })
        
//     }

// }

// const removeBranch = (payload) =>{

//     return {type : "DELETE_BRANCH",payload}

// }

// export const deleteBranch = (id) =>{
//      const requestOptions = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         let message = ''
//         fetch("http://localhost:8075//deleteBranchById/" + id, requestOptions)
//             .then(res => {
//                 console.log(res)
                
//                 if(res.status === 200){
//                    message = 'succesfully deleted branch'
//                 }
//                 else
//                 message = 'failed'

//                 return res.json()
//             }).then(data=>{
//                 console.log(data)
//                 dispatch(removeBranch({branchdetails : data,message}))
//             })
            
// }}


// // const findUser = (user) =>{
// //     return {type : "FIND_USER",payload : {user}}
// // }

// // export const fetchUser = (id) => {

// //     const requestOptions = {
// //         method: 'GET',
// //         headers: { 'Content-Type': 'application/json' }
// //     };
// //     return dispatch => {
// //         fetch('http://localhost:8080/users/'+id, requestOptions)
// //             .then(res => {
// //                 console.log(res);
// //                 return res.json();
// //             })
// //             .then(data => {
// //                 console.log(data);
// //                 dispatch(findUser(data));
// //             })
        
// //     }

// // }

// const updateBranchDetails = () =>{
// console.log('inside update branch')
//     return {type : "UPDATE_BRANCHDETAILS",payload : {message : "Successfully updated branch"}}

// }

// export const EditBranchDetails = (payload) =>{
//      const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     };
//     return dispatch => {
//         fetch('http://localhost:8075//branches/' , requestOptions)
//             .then(res => {
//                 console.log(res)
//                 // console.log(res.json())
//                 if(res.status === 204){
//                     console.log("success");
//                     dispatch(updateBranchDetails())
//                 }
//             })
// }}
