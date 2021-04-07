import React, { Component } from "react";
import { connect } from "react-redux";
import * as branch from '../actions/branch';

class UpdateBranch extends Component {
  constructor() {
    super();
    this.branchId=React.createRef();
    this.branchName=React.createRef();
    this.branchDescription=React.createRef();
        this.state = {message: ''}
  }

  updateBranch() {
    console.log("updating...");

    var branch = {
        branchId:this.branchId.current.value,
        branchName:this.branchName.current.value,
        branchDescription:this.branchDescription.current.value,
      //  isavailable: this.isavailable.current.value
       
    };

    this.props.onUpdateBranch(branch)

  }

  componentDidMount()
  {

    

  }
  


  render() {
    return (
      <div>
        <div className="w-50 user-form">
          <div className="input-group mb-3">
            <input
              ref={this.branchId}
              value = {this.props.match.params.branchId}
              disabled
              type="number"
              className="form-control"
              placeholder="branchId"
            />
            </div>
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
            onClick={this.updateBranch.bind(this)}
          >
            Update
          </button>
        </div>

        <div className="alert alert-success" role="alert">
          {this.props.message}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  
  return {
   
    message : state.message
  }
}

const mapDispatchToState = (dispatch)=>{

  return {
    onUpdateBranch : (payload) => dispatch(branch.EditBranch(payload))
  }

}

export default connect(mapStateToProps,mapDispatchToState)(UpdateBranch)