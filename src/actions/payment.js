const savePayment = () =>{

    return {type : "ADD_PAYMENT",payload : {message : "Successfully added payment"}}

}

export const addPayment = (payload) =>{
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8075/payments', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(savePayment())
                }
            })
}}

const findPayment = (payload) =>{
    return {type : "FIND_PAYMENT",payload}
}

export const fetchPayment = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8075/payments', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findPayment(data));
            })
        
    }

}

const removePayment = (payload) =>{

    return {type : "DELETE_PAYMENT",payload}

}

export const deletePayment = (id) =>{
     const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        fetch("http://localhost:8075/payment/" + id, requestOptions)
            .then(res => {
                console.log(res)
                
                if(res.status === 200){
                   message = 'succesfully deleted payment'
                }
                else
                message = 'failed'

                return res.json()
            }).then(data=>{
                console.log(data)
                dispatch(removePayment({payment : data,message}))
            })
            
}}

const updatePayment = () =>{
    console.log('inside update payment')
        return {type : "UPDATE_PAYMENT",payload : {message : "Successfully updated payment"}}
    
    }
    
    export const EditPayment = (payload) =>{
         const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        return dispatch => {
            fetch('http://localhost:8075/payments', requestOptions)
                .then(res => {
                    console.log(res)
                    if(res.status === 200){
                        console.log("successfully updated");
                        dispatch(updatePayment())
                    }
                })
    }}
