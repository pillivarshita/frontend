 import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/user';


class UpdateUser extends Component {
  constructor() {
    super();
    this.userId = React.createRef();
    this.firstName = React.createRef();
    this.middleName = React.createRef();
    this.lastName= React.createRef();
    this.email= React.createRef();
    this.mobileNumber= React.createRef();
    this.aadharCardNo= React.createRef();
    this.state = { user : {},message: "" };
  }

  updateUser() {
    console.log("updating...");

    var user = {
      userId: this.userId.current.value,
      firstName: this.firstName.current.value,
      middleName: this.middleName.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      mobileNumber: this.mobileNumber.current.value,
      aadharCardNo : this.aadharCardNo.current.value
    };

    this.props.onUpdateUser(user)
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
              ref={this.firstName}
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.middleName}
              type="text"
              className="form-control"
              placeholder="Middle Name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.lastName}
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.email}
              type="text"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.mobileNumber}
              type="integer"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.aadharCardNo}
              type="integer"
              className="form-control"
              placeholder="Aadhar Card Number"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateUser.bind(this)}
          >
            Save Changes
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
      onUpdateUser : (payload) => dispatch(actions.EditUser(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdateUser)