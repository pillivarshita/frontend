import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User.js";
import * as actions from '../actions/user'

class ViewUser extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchUsers()
     document.body.style.backgroundColor = "skyblue";
  }

 

  render() {
    var usersList = this.props.users.map((user, i) => {
      return (
        <User
          key={user.userId}
          userId={user.userId}
          firstName= {user.firstName}
          middleName= {user.middleName}
          lastName= {user.lastName}
          email= {user.email}
          mobileNumber= {user.mobileNumber}
          aadharCardNo= {user.aadharCardNo}
          fetchData={this.fetchData.bind(this)}
        ></User>
      );
    });

    return (
      <div>
        <div>{usersList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    users : state.users || []
  }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchUsers : () => dispatch(actions.fetchUser())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewUser);