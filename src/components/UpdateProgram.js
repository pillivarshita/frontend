import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/program';


class UpdateProgram extends Component {
  constructor() {
    super();
    this.programId=React.createRef();
    this.programName=React.createRef();
    this.eligibility = React.createRef();
    this.duration= React.createRef();
    this.degreeOffered=React.createRef();
    this.state = {message: ''} 
  }

  updateProgram() {
    console.log("updating...");
    var program = {
        programId:this.programId.current.value,
        programName: this.programName.current.value,
        eligibility:this.eligibility.current.value,
        duration:this.duration.current.value,
        degreeOffered:this.degreeOffered.current.value
    };

    this.props.onUpdateProgram(program)
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
              ref={this.programId}
              value = {this.props.match.params.programId}
              disabled
              type="Integer"
              className="form-control"
              placeholder="programId"
            />
            </div>
          <div className="input-group mb-3">
            <input
              ref={this.programName}
              type="text"
              className="form-control"
              placeholder="programName"
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
          <div className="input-group mb-3">
            <input
              ref={this.duration}
              type="text"
              className="form-control"
              placeholder="duration"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.degreeOffered}
              type="text"
              className="form-control"
              placeholder="degreeOffered"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateProgram.bind(this)}
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
      onUpdateProgram : (payload) => dispatch(actions.EditProgram(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdateProgram)