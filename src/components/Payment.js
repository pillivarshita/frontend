import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/payment";

class Payment extends Component {
  deletePayment(paymentId) {
    //console.log("deleting payment "  + id)

    this.props.onDeletePayment(paymentId);
  }

  render() {
    return (
      <div className="card">
        <img
          src="stock-photography.jpg"
          // width="50%"
          className="card-img-top"
          alt="..."
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body">
          <span className="badge rounded-pill bg-primary">
            Payment Id :{this.props.paymentId}
          </span>
          <h5 className="card-text">Email:{this.props.emailId}</h5>
          <p className="card-text">
            Payment Amount :{this.props.paymentAmount}
          </p>
          <p className="card-text">
            Payment Description :{this.props.paymentDescription}
          </p>
          <p className="card-text">
            Payment Status :{this.props.paymentStatus}
          </p>
          <p className="card-text">Payment Date :{this.props.paymentDate}</p>
          {/* <p className="card-text">Application Id      :{this.props.applicationId}</p> */}

          <button
            className="btn btn-danger"
            onClick={this.deletePayment.bind(this, this.props.paymentId)}
          >
            Delete
          </button>
          <Link to={"/updatepayment/" + this.props.paymentId}>
            <button className="btn btn-primary">Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payments: state.payments,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    onDeletePayment: (id) => dispatch(actions.deletePayment(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Payment);