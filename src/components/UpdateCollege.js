import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/college';


class UpdateCollege extends Component {
  constructor() {
    super();
    this.collegeRegId = React.createRef();
    this.collegeName = React.createRef();
    this.address = React.createRef();
   
    this.state = { user : {},message: "" };
  }

  updateCollege() {
    console.log("updating...");

    var college = {
      collegeRegId: this.collegeRegId.current.value,
     collegeName: this.collegeName.current.value,
      address: this.address.current.value,
    
    };

    this.props.onUpdateCollege(college)
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
              ref={this.collegeRegId}
              value = {this.props.collegeRegId}
          
              type="Integer"
              className="form-control"
              placeholder="ID"
            />
            </div>
          <div className="input-group mb-3">
            <input
              ref={this.collegeName}
              disabled
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.address}
              type="text"
              className="form-control"
              placeholder="Address"
            />
          </div>
          
         
        
          <button
            className="add-btn btn btn-primary"
            onClick={this.updateCollege.bind(this)}
          >
            update
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
      onUpdateCollege : (payload) => dispatch(actions.EditCollege(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdateCollege)