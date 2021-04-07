import React, { Component } from "react";
import { connect } from "react-redux";
import Program from "./Program.js";
import * as actions from '../actions/program'

class ViewProgram extends Component {
  constructor() {
    super();
    this.state = { programs: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchPrograms()
  }

 

  render() {
    // if(this.props.program===undefined){
    //   return(
    //     <h1>Loading....</h1>
    //   )
    // }
    var programsList = this.props.programs.map((program, i) => {
      return (
        <Program
          key={program.programId}
          programId={program.programId}
          programName={program.programName}
          eligibility={program.eligibility}
          duration={program.duration}
          degreeOffered={program.degreeOffered}
          fetchData={this.fetchData.bind(this)}
        ></Program>
      );
    });

    return (
      <div>
        <div>{programsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    programs : state.programs||[]
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchPrograms : () => dispatch(actions.fetchPrograms())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewProgram);