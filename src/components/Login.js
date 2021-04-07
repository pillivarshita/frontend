import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/login';


class Login extends Component {

    deleteLogin(userId) {
      //console.log("deleting payment "  + id)
  
  
      this.props.onDeleteLogin(userId)
    }


    render(){
        return (
          <div className="card">
          <img src="img_avatar.png" width = "25%" className="card-img-top" alt="..."  style={{ height: "250px", objectFit: "contain" }}/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">User Id :{this.props.userId}</span>
            <p className="card-text">User Name                :{this.props.userName}</p>
            {/* <p className="card-text">password            :{this.props.password}</p> */}
            <p className="card-text">Role                :{this.props.role}</p>
           
            <button  className="btn btn-danger" onClick={this.deleteLogin.bind(this,this.props.userId)}>Delete</button>
            <Link to={"/change/"+this.props.userId}><button  className="btn btn-primary">Change Password</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     logins : state.logins
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeleteLogin : (id) => dispatch(actions.deleteLogin(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(Login)