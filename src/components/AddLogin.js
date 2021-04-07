import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/login";


class AddLogin extends Component {
  constructor() {
    super();
    //this.userId = React.createRef();
    this.userName= React.createRef();
    this.password= React.createRef();
    this.role = React.createRef();
    this.state = { message: "" };
  }

  addLogin() {
    var login = {
      //userId: this.userId.current.value,
      userName: this.userName.current.value,
      password: this.password.current.value,
      role: this.role.current.value,
     
            
    };


    this.props.onAddLogin(login)
  }

render(){
  return (
    <div>
      <div className="w-50 user-form">
        {/* <div className="input-group mb-3">
          <input
            ref={this.userId}
            type="integer"
            className="form-control"
            placeholder="User Id"
          />
        </div> */}
        
        <div className="input-group mb-3">
          <input
            ref={this.userName}
            type="text"
            className="form-control"
            placeholder="User Name"
          />
        </div>
        <div className="input-group mb-3">
          <input
            ref={this.password}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        {/* <div className="input-group mb-3">
          <input
            ref={this.role}
            type="text"
            className="form-control"
            placeholder="Role"
          />
        </div> */}
        <select ref={this.role} className="form-select mb-3" aria-label="Default select example">
       <option value  >Role</option>
       <option value = "Admin" >Admin</option>
       <option value = "Student" >Student</option>      
      </select>
                
         <button
          className="add-btn btn btn-primary"
          onClick={this.addLogin.bind(this)}
        >
          Add
        </button>
      </div>
      <div className="alert alert-success" role="alert">
        {this.props.message}
      </div>
    </div>
  );
}

}

const mapStateToProps = (state) =>{

  return{
    message : state.message,
    logins : state.logins
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddLogin : (payload) => dispatch(actions.addLogin(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddLogin)