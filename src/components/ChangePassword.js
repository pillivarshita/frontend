 import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/login';


class ChangePassword extends Component {
  constructor() {
    super();
    this.userId = React.createRef();
    this.password = React.createRef();
    this.userName = React.createRef();
    this.role = React.createRef();
    this.state = { user : {},message: "" };
  }

  
   changePassword(){
     console.log("changing...");

    var login = {
      userId: this.userId.current.value,
      userName: this.userName.current.value,
      password: this.password.current.value,
      role: this.role.current.value,
      
    };

    this.props.onChangePassword(login)
  }
  componentDidMount()
  {

    

  }
  render(){
    return (
      <div>
        <div className="w-50 user-form">
        <div className="input-group mb-3">
            <input
              ref={this.userId}
               value = {this.props.match.params.userId}
               disabled
              type="Integer"
              className="form-control"
              placeholder="User Id"
            />
            </div>
            <div className="input-group mb-3">
            <input
              ref={this.userName}
                value = {this.props.match.params.userName}
                disabled
              type="text"
              className="form-control"
              placeholder="Name"
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
         
          <div className="input-group mb-3">
           <input
              ref={this.role}
               value = {this.props.match.params.role}
               disabled
              type="Integer"
              className="form-control"
              placeholder="Role"
            />
            </div>
          
          
          
          <button
            className="add-btn btn btn-primary"
            onClick={this.changePassword.bind(this)}
          >
            Change
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
      message : state.message
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
  
    return {
      onChangePassword : (payload) => dispatch(actions.ChangePassword(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(ChangePassword)