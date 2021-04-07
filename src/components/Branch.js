import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";
import * as actions from '../actions/branch';

class Branch extends Component {

  deleteBranch(branchId) {
    //console.log("deleting branch "  + id)


    this.props.onDeleteBranch(branchId)

     
  }

   
  
  
    render() {
      // console.log(this.props)
        return (
            <div className="card">
            <img src="branchicon3.png" width="50%" className="card-img-top" alt="..."/>
            <div className="card-body">
          <span className="badge rounded-pill bg-dark">Branch Id:{this.props.branchId}</span>
            <h5 className="card-title">Branch:</h5>
            <h5 className="card-title">{this.props.branchName}</h5>
            <p className="card-text">BranchDescription:{this.props.branchDescription}</p>

            <button  className="btn btn-danger" onClick={this.deleteBranch.bind(this,this.props.branchId)}>Delete</button>
            <Link to={"/updateBranch/"+this.props.branchId}><button  className="btn btn-primary">Edit</button></Link>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
    branches : state.branches
  }
}

const mapDispatchToState = (dispatch)=>{
  return{
    onDeleteBranch : (id) => dispatch(actions.deleteBranch(id))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(Branch)