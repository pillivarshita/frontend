import React, { Component } from "react";
import { connect } from "react-redux";
import Branch from "./Branch.js";
import * as actions from '../actions/branch'

class ViewBranch extends Component {
  constructor() {
    super();
    this.state = { branches: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")   

  }

  componentDidMount() {
    this.props.onFetchBranches()
  }

 

  render() {
    // if(this.props.branch===undefined){
    //   return(
    //     <h1>Loading....</h1>
    //   )
    // }
    console.log(this.props)
    var branchesList = this.props.branches.map((branch, j) => {
      return (
        <Branch
          key={branch.branchId}
          branchId={branch.branchId}
          branchName={branch.branchName}
          branchDescription={branch.branchDescription}
          fetchData={this.fetchData.bind(this)}
        ></Branch>
      );
    });

    return (
      <div>
        <div>{branchesList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    branches : state.branches||[]
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchBranches : () => dispatch(actions.fetchBranches())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewBranch);