const saveProgramScheduled = () =>{

    return {type : "ADD_PROGRAMSCHEDULED",payload : {message : "Successfully added programSchedule"}}

}

export const addProgramScheduled = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/programScheduled', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveProgramScheduled())
                }
            })
}}

const findProgramScheduled = (payload) =>{
    return {type : "FIND_PROGRAMSCHEDULED",payload}
}

export const fetchProgramSchedules = (programScheduled) => {
    console.log(programScheduled)

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/programScheduled', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findProgramScheduled(data));
            })
        
    }

}

// const removeCourse = (payload) =>{

//     return {type : "DELETE_COURSE",payload}

// }
export const removeProgramScheduled = (programScheduled) => {
    return { type: "DELETE_PROGRAMSCHEDULED", payload: { message: "Successfully deleted" ,programScheduled:programScheduled } }

}

export const deleteProgramScheduled = (scheduleId) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        // let message = ''
        fetch("http://localhost:8075/deleteProgramScheduledById/" + scheduleId, requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch(fetchProgramSchedules())
                    dispatch(removeProgramScheduled({scheduleId:scheduleId}))
                }else {
                    console.log("RES", res)
                    dispatch(removeProgramScheduled({scheduleId:scheduleId}))
                }
                // setTimeout(() => {
                //     dispatch(deleteUser(""));
                // }, 3000);
            })

// export const deleteCourse = (courseId) =>{
//      const requestOptions = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         let message = ''
//         fetch("http://localhost:8075/deleteCourseById/" + courseId, requestOptions)
//             .then(res => {
//                 console.log(res)
                
//                 if(res.status === 200){
//                    message = 'succesfully deleted course'
//                 }
//                 else
//                 message = 'failed'

//                 return res.json()
//             }).then(data=>{
//                 console.log(data)
//                 dispatch(removeCourse({course : data,message}))
//             })
            
}}

export const updateProgramScheduled = () =>{
    console.log('inside update programScheduled')
        return {type : "UPDATE_PROGRAMSCHEDULED",payload : {message : "Successfully updated programScheduled"}}
    
    }
    
    export const EditProgramScheduled = (payload) =>{
         const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        return dispatch => {
            fetch('http://localhost:8075/programScheduled/', requestOptions)
                .then(res => {
                    console.log(res)
                    if(res.status === 202){
                        dispatch(updateProgramScheduled("successfully updated programSchedule!!!"))
                    }
                    else{
                        dispatch(updateProgramScheduled("Updating programSchedule failed!!!"))
                    }                   
                })
    }}
    