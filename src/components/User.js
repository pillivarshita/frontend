import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/user';


class User extends Component {

    deleteUser(userId) {
      //console.log("deleting payment "  + id)
  
  
      this.props.onDeleteUser(userId)
    }


    render(){
        return (
          <div className="card">
          <img src="user_avatar.png" width = "50%" className="card-img-top" alt="..." style={{ height: "250px", objectFit: "contain" }}/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">User Id :{this.props.userId}</span>
            <h5 className="card-title">First Name              :{this.props.firstName}</h5>
            <p className="card-text">Middle Name               :{this.props.middleName}</p>
            <p className="card-text">Last Name                 :{this.props.lastName}</p>
            <p className="card-text">Email                     :{this.props.email}</p>
            <p className="card-text">Mobile Number             :{this.props.mobileNumber}</p>
            <p className="card-text">Aadhar Card Number        :{this.props.aadharCardNo}</p>

            <button  className="btn btn-danger" onClick={this.deleteUser.bind(this,this.props.userId)}>Delete</button>
            <Link to={"/updateuser/"+this.props.userId}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     users : state.users
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeleteUser : (id) => dispatch(actions.deleteUser(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(User)