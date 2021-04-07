import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/program";


class AddProgram extends Component {
  constructor() {
    super();

    this.programName=React.createRef();
    this.eligibility = React.createRef();
    this.duration=React.createRef();
    this.degreeOffered=React.createRef();
    this.state = { message: "" };
  }

  addProgram() {
    var program = {
        programName: this.programName.current.value,
        eligibility:this.eligibility.current.value,
        duration:this.duration.current.value,
        degreeOffered:this.degreeOffered.current.value
    };

    this.props.onAddProgram(program)
  }

render(){
  return (
    <div>
      <div className="w-50 user-form">
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
          onClick={this.addProgram.bind(this)}
        >
          Add
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
    message : state.message,
    programs : state.programs
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddProgram : (payload) => dispatch(actions.addProgram(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddProgram)