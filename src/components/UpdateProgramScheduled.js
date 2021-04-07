import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/programScheduled';


class UpdateProgramScheduled extends Component {
  constructor() {
    super();
    this.scheduleId=React.createRef();
    // this.branch=React.createRef();
    // this.course=React.createRef();
    // this.program=React.createRef();
    // this.college=React.createRef();
    // this.university=React.createRef();
    this.startDate=React.createRef();
    this.endDate=React.createRef();
    this.state = {message: ''} 
  }

  updateProgramScheduled() {
    console.log("updating...");
    var programScheduled = {
        scheduleId:this.scheduleId.current.value,
        // branch: this.branch.current.value,
        // course: this.course.current.value,
        // program: this.program.current.value,
        // college: this.college.current.value,
        // university: this.university.current.value,
        startDate: this.startDate.current.value,
        endDate: this.endDate.current.value
    };

    this.props.onUpdateProgramScheduled(programScheduled)
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
              ref={this.scheduleId}
              type="text"
              className="form-control"
              placeholder="scheduleId"
            />
          </div>
         {/*  <div className="input-group mb-3">
            <input
              ref={this.branch}
              type="text"
              className="form-control"
              placeholder="branch"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.course}
              type="text"
              className="form-control"
              placeholder="course"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.program}
              type="text"
              className="form-control"
              placeholder="program"
            />
          </div>
          <div className="input-group mb-3">
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

          <button
            className="add-btn btn btn-primary"
            onClick={this.updateProgramScheduled.bind(this)}
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

  const mapStateToProps = (state) =>{
    return{
      message : state.message
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
  
    return {
      onUpdateProgramScheduled : (payload) => dispatch(actions.EditProgramScheduled(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdateProgramScheduled)