import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "./Course.js";
// import branchId from "./Branch.js";
import * as actions from '../actions/course'

class ViewCourse extends Component {
  constructor() {
    super();
    this.state = { courses: [],branch:[] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchCourses()
  }

 

  render() {
    var coursesList = this.props.courses.map((course, branch, i) => {
      return (
        <Course
          key={course.courseId}
          courseId={course.courseId}
          courseName={course.courseName}
          eligibility={course.eligibility}      
          // branchId={this.branchId.current.value}
          fetchData={this.fetchData.bind(this)}
        ></Course>
      );
    });

    return (
      <div>
        <div>{coursesList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    courses : state.courses||[]
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchCourses : () => dispatch(actions.fetchCourses())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewCourse);