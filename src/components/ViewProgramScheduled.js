import React, { Component } from "react";
import { connect } from "react-redux";
import ProgramScheduled from "./ProgramScheduled.js";
import * as actions from '../actions/programScheduled';


class ViewProgramScheduled extends Component {
  constructor() {
    super();
    this.state = { programSchedules: [],program:[] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchProgramSchedules()
  }

 

  render() {
    // if(this.props.program===undefined){
    //   return(
    //     <h1>Loading....</h1>
    //   )
    // }
    var programScheduledList = this.props.programSchedules.map((programScheduled,program, i) => {
      return (
        <ProgramScheduled
          key={programScheduled.scheduleId}
          scheduleId={programScheduled.scheduleId}
          branchName={programScheduled.branchName}
          courseName={programScheduled.courseName}
          programName={program.programName}
          // college={programScheduled.college}
          // university={programScheduled.university}
          startDate={programScheduled.startDate}
          endDate={programScheduled.endDate}
          fetchData={this.fetchData.bind(this)}
        ></ProgramScheduled>
      );
    });

    return (
      <div>
        <div>{programScheduledList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    programSchedules : state.programSchedules||[]
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchProgramSchedules : () => dispatch(actions.fetchProgramSchedules())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewProgramScheduled);