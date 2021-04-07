const saveCourse = () =>{

    return {type : "ADD_COURSE",payload : {message : "Successfully added course"}}

}

export const addCourse = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/courses', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveCourse())
                }
            })
}}

const findCourse = (payload) =>{
    return {type : "FIND_COURSE",payload}
}

export const fetchCourses = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/courses', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findCourse(data));
            })
        
    }

}

// const removeCourse = (payload) =>{

//     return {type : "DELETE_COURSE",payload}

// }
export const removeCourse = (course) => {
    return { type: "DELETE_COURSE", payload: { message: "Successfully deleted",course:course }  }

}

export const deleteCourse = (courseId) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        // let message = ''
        fetch("http://localhost:8075/deleteCourseById/" + courseId, requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch(fetchCourses())
                    dispatch(removeCourse({courseId:courseId}))
                }else {
                    console.log("RES", res)
                    dispatch(removeCourse({courseId:courseId}))
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

export const updateCourse = () =>{
    console.log('inside update course')
        return {type : "UPDATE_COURSE",payload : {message : "Successfully updated course"}}
    
    }
    
    export const EditCourse = (payload) =>{
         const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        return dispatch => {
            fetch('http://localhost:8075/courses', requestOptions)
                .then(res => {
                    console.log(res)
                    if(res.status === 202){
                        dispatch(updateCourse("successfully updated course!!!"))
                    }
                    else{
                        dispatch(updateCourse("Updating course failed!!!"))
                    }                   
                })
    }}