import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/course';


class UpdateCourse extends Component {
  constructor() {
    super();
    this.courseId=React.createRef();
    this.courseName=React.createRef();
    this.eligibility = React.createRef();
    this.state = {message: ''} 
  }

  updateCourse() {
    console.log("updating...");
    var course = {
        courseId: this.courseId.current.value,
        courseName: this.courseName.current.value,
        eligibility:this.eligibility.current.value
    };

    this.props.onUpdateCourse(course)
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
              ref={this.courseId}
              value = {this.props.match.params.courseId}
              disabled
              type="Integer"
              className="form-control"
              placeholder="courseId"
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
              ref={this.eligibility}
              type="text"
              className="form-control"
              placeholder="eligibility"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateCourse.bind(this)}
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
      onUpdateCourse : (payload) => dispatch(actions.EditCourse(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdateCourse)