import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/programScheduled";


class AddProgramScheduled extends Component {
  constructor() {
    super();
    this.scheduleId=React.createRef();
    this.branchName=React.createRef();
    this.courseName=React.createRef();
    this.programName=React.createRef();
    // this.college=React.createRef();
    // this.university=React.createRef();
    this.startDate=React.createRef();
    this.endDate=React.createRef();
    this.state = { message: "" };
  }

  addProgramScheduled() {
    var programScheduled = {
        branchName: this.branchName.current.value,
        courseName: this.courseName.current.value,
        programName: this.programName.current.value,
        // college: this.college.current.value,
        // university: this.university.current.value,
        startDate: this.startDate.current.value,
        endDate: this.endDate.current.value
    };

    this.props.onAddProgramScheduled(programScheduled)
  }

render(){
  return (
    <div>
      <div className="w-50 user-form">
       {/*  <div className="input-group mb-3">
          <input
            ref={this.college}
            type="text"
            className="form-control"
            placeholder="college"
          />
        </div>
        <div className="input-group mb-3">
          <input
            ref={this.university}
            type="text"
            className="form-control"
            placeholder="university"
          />
        </div> */}
        <div className="input-group mb-3">
          <input
            ref={this.startDate}
            type="text"
            className="form-control"
            placeholder="startDate"
          />
        </div>
        <div className="input-group mb-3">
          <input
            ref={this.endDate}
            type="text"
            className="form-control"
            placeholder="endDate"
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
            ref={this.courseName}
            type="text"
            className="form-control"
            placeholder="courseName"
          />
        </div>
        <div className="input-group mb-3">
          <input
            ref={this.programName}
            type="text"
            className="form-control"
            placeholder="programName"
          />
        </div>

        <button
          className="add-btn btn btn-primary"
          onClick={this.addProgramScheduled.bind(this)}
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
    programSchedules : state.programSchedules
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddProgramScheduled : (payload) => dispatch(actions.addProgramScheduled(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddProgramScheduled)