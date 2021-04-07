import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/college";



class AddCollege extends Component {
  constructor() {
    super();
    this.collegeName = React.createRef();
    this.address= React.createRef();
    this.state = { message: "" };
  }

  addCollege() {
    var college = {
      collegeName: this.collegeName.current.value,
       address: this.address.current.value,
      
    };


    this.props.onAddCollege(college)
  }

render(){
  return (
    <div>
    <div className="w-50 user-form">
      <div className="input-group mb-3">
        <input
          ref={this.collegeName}
          type="text"
          className="form-control"
          placeholder="collegename"
        />
      </div>
      <div className="input-group mb-3">
        <input
          ref={this.address}
          type="text"
          className="form-control"
          placeholder="Address"
        />
      </div>
    
     
      <button
        className="add-btn btn btn-primary"
        onClick={this.addCollege.bind(this)}
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
    colleges : state.colleges
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddCollege : (payload) => dispatch(actions.addCollege(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddCollege)