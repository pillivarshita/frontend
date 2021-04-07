import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/program';


class Program extends Component {

    deleteProgram(programId) {
      // console.log("deleting program "  + id)
  
  
      this.props.onDeleteProgram(programId)
    }


    render(){
        return (
          <div className="card">
          <img src="program icon.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">Program Id :{this.props.programId}</span>
            <h5 className="card-title">Program Name:</h5>
            <h5 className="card-title">{this.props.programName}</h5>
            <p className="card-text">Eligibility      :{this.props.eligibility}</p>
            <p className="card-text">Duration      :{this.props.duration}</p>
            <p className="card-text">Degree Offered      :{this.props.degreeOffered}</p>

            <button  className="btn btn-danger" onClick={this.deleteProgram.bind(this,this.props.programId)}>Delete</button>
            <Link to={"/updateProgram/"+this.props.programId}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     programs : state.programs
    }
  }
  
  const mapDispatchToState = (dispatch)=>{
    return{
      onDeleteProgram : (id) => dispatch(actions.deleteProgram(id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(Program)