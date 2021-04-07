import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/payment";


class AddPayment extends Component {
  constructor() {
    super();
    this.emailId = React.createRef();
    this.paymentAmount = React.createRef();
    this.paymentDescription = React.createRef();
    this.paymentDate = React.createRef();
    this.paymentStatus =  React.createRef();
    this.state = { message: "" };
  }

  addPayment() {
    var payment = {
      paymentAmount: this.paymentAmount.current.value,
      paymentDescription: this.paymentDescription.current.value,
      paymentDate: this.paymentDate.current.value,
      paymentStatus: this.paymentStatus.current.value,
      emailId : this.emailId.current.value,
    };


    this.props.onAddPayment(payment)
  }

render(){
  return (
    <div>
      <div className="w-50 user-form">
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
            ref={this.paymentDescription}
            type="text"
            className="form-control"
            placeholder="paymentDescription"
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
        <div className="input-group mb-3">
          <input
            ref={this.paymentDate}
            type="LocalDate" 
            className="form-control"
            placeholder="paymentDate"
          />
        </div>
        <button
          className="add-btn btn btn-primary"
          onClick={this.addPayment.bind(this)}
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
    payments : state.payments
  }

}

const mapDispatchToState = (dispatch) =>{
  return{
    onAddPayment : (payload) => dispatch(actions.addPayment(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToState)(AddPayment)