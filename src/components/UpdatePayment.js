import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/payment';


class UpdatePayment extends Component {
  constructor() {
    super();
    this.paymentId = React.createRef();
    this.emailId = React.createRef();
    this.paymentAmount = React.createRef();
    this.paymentDescription= React.createRef();
    this.paymentStatus= React.createRef();
    this.state = { user : {},message: "" };
  }

  updatePayment() {
    console.log("updating...");

    var payment = {
      id: this.paymentId.current.value,
      emailId: this.emailId.current.value,
      paymentAmount: this.paymentAmount.current.value,
      paymentDescription: this.paymentDescription.current.value,
      paymentStatus : this.paymentStatus.current.value
    };

    this.props.onUpdatePayment(payment)
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
              ref={this.paymentId}
              value = {this.props.paymentId}
              type="Integer"
              className="form-control"
              placeholder="paymentId"
            />
            </div>
          <div className="input-group mb-3">
            <input
              ref={this.paymentDescription}
              type="text"
              className="form-control"
              placeholder="paymentDescription"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.emailId}
              type="text"
              className="form-control"
              placeholder="emailId"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.paymentAmount}
              type="integer"
              className="form-control"
              placeholder="paymentAmount"
            />
          </div>
          <div className="input-group mb-3">
            <input
              ref={this.paymentStatus}
              type="text"
              className="form-control"
              placeholder="paymentStatus"
            />
          </div>
          <button
            className="add-btn btn btn-primary"
            onClick={this.updatePayment.bind(this)}
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
      onUpdatePayment : (payload) => dispatch(actions.EditPayment(payload))
    }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToState)(UpdatePayment)
