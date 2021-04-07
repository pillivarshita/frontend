import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/course";


class AddCourse extends Component {
  constructor() {
    super();

    this.courseName=React.createRef();
    this.eligibility = React.createRef();
    // this.branchList=React.createRef();
    this.branchId=React.createRef();
    this.state = { message: "" };
  }

  addCourse() {
    var course = {
        courseName: this.courseName.current.value,
        eligibility:this.eligibility.current.value,
        // branch:{
        //   branchId:this.branchId.current.value
        // }
    };

    this.props.onAddCourse(course)
  }

render(){
  return (
    <div>
      <div className="w-50 user-form">
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
            ref={this.eligibility}
            type="text"
            className="form-control"
            placeholder="eligibility"
          />
        </div>
        {/* <div className="input-group mb-3">
          <input
            ref={this.branchId}
            type="text"
            className="form-control"
            placeholder="branchId"
          />
        </div> */}

        <button
          className="add-btn btn btn-primary"
          onClick={this.addCourse.bind(this)}
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
    courses : state.courses
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddCourse : (payload) => dispatch(actions.addCourse(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddCourse)