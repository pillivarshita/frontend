import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/course';


class Course extends Component {

    deleteCourse(courseId) {
      // console.log("deleting course "  + id)
  
  
      this.props.onDeleteCourse(courseId)
    }


    render(){
        return (
          <div className="card">
          <img src="download.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">Course Id :{this.props.courseId}</span>
          <h5 className="card-title">Course Name:</h5>
            <h5 className="card-title">{this.props.courseName}</h5>
            <p className="card-text">Eligibility      :{this.props.eligibility}</p>
            {/* <p className="card-text">BranchId:{this.props.branchId}</p> */}

            <button  className="btn btn-danger" onClick={this.deleteCourse.bind(this,this.props.courseId)}>Delete</button>
            <Link to={"/updateCourse/"+this.props.courseId}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     courses : state.courses
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeleteCourse : (id) => dispatch(actions.deleteCourse(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(Course)