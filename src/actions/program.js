const saveProgram = () =>{

    return {type : "ADD_PROGRAM",payload : {message : "Successfully added program"}}

}

export const addProgram = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/programs', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveProgram())
                }
            })
}}

const findProgram = (payload) =>{
    return {type : "FIND_PROGRAM",payload}
}

export const fetchPrograms = (program) => {
    console.log(program)

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/programs', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findProgram(data));
            })
        
    }

}

export const removeProgram = (program) => {
    return { type: "DELETE_PROGRAM", payload: { message: "Successfully deleted" ,program:program } }

}

export const deleteProgram = (programId) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch("http://localhost:8075/deleteProgramById/" + programId, requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch(fetchPrograms())
                    dispatch(removeProgram({programId:programId}))
                }else {
                    console.log("RES", res)
                    dispatch(removeProgram({programId:programId}))
                }
            })          
}}

export const updateProgram = () =>{
    console.log('inside update program')
        return {type : "UPDATE_PROGRAM",payload : {message : "Successfully updated program"}}
    
    }
    
    export const EditProgram = (payload) =>{
         const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        return dispatch => {
            fetch('http://localhost:8075/programs', requestOptions)
                .then(res => {
                    console.log(res)
                    if(res.status === 202){
                        dispatch(updateProgram("successfully updated program!!!"))
                    }
                    else{
                        dispatch(updateProgram("Updating program failed!!!"))
                    }                   
                })
    }}
    