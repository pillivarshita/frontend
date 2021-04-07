import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/programScheduled';


class ProgramScheduled extends Component {

    deleteProgramScheduled(scheduleId) {
      // console.log("deleting program "  + id)
  
  
      this.props.onDeleteProgramScheduled(scheduleId)
    }


    render(){
        return (
          <div className="card">
          <img src="programScheduled.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">ProgramSchedule Id :{this.props.scheduleId}</span>
             {/* <h5 className="card-title">Branch Name        :{this.props.branchName}</h5>
            <p className="card-text">Course Name     :{this.props.courseName}</p>
            <p className="card-text">Program Name     :{this.props.programName}</p> */}
            {/*<p className="card-text">College      :{this.props.college}</p>
            <p className="card-text">University      :{this.props.university}</p> */}
            <p className="card-text">Program:{this.props.programName}</p>
            <p className="card-text">StartDate:{this.props.startDate}</p>
            <p className="card-text">EndDate:{this.props.endDate}</p>

            <button  className="btn btn-danger" onClick={this.deleteProgramScheduled.bind(this,this.props.scheduleId)}>Delete</button>
            <Link to={"/updateProgramScheduled/"+this.props.scheduleId}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     programSchedules : state.programSchedules
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeleteProgramScheduled : (id) => dispatch(actions.deleteProgramScheduled(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(ProgramScheduled)