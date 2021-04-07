import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/branch";

class AddBranch extends Component {
  constructor() {
    super();
    
        this.branchName=React.createRef();
        this.branchDescription=React.createRef();
        this.state = {message: ""}

  }

  addBranch() {
    var branch = {
        branchName:this.branchName.current.value,
        branchDescription:this.branchDescription.current.value
    };


    this.props.onAddBranch(branch)

    
  }

  render() {
    return (
      <div>
        <div className="w-50 h-10 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.branchName}
              type="text"
              className="form-control"
              placeholder="branchName"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.branchDescription}
              type="text"
              className="form-control"
              placeholder="branchDescription"
            />
          </div>
          
        
          <button
            className="add-btn btn btn-primary"
            onClick={this.addBranch.bind(this)}
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
    branches : state.branches
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddBranch : (payload) => dispatch(actions.addBranch(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddBranch)