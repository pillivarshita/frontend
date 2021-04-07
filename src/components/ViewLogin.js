import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import * as actions from '../actions/login'

class ViewLogin extends Component {
  constructor() {
    super();
    this.state = { logins: [] };
  }
  
  fetchData()
  {

    console.log("fetching data.....")
  }
  componentDidMount() {
    this.props.onFetchLogins()
     document.body.style.backgroundColor = "skyblue";
  }

 

  render() {
    var loginsList = this.props.logins.map((login, i) => {
      return (
        <Login
          key={login.userId}
          userId={login.userId}
          userName= {login.userName}        
          
         // password={login.password}
          role={login.role}
          fetchData={this.fetchData.bind(this)}
        ></Login>
      );
    });

    return (
      <div>
        <div>{loginsList}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    
    logins : state.logins || []
      }
}

const mapDispatchToState = (dispatch) =>{
  return {
    onFetchLogins : () => dispatch(actions.fetchLogin())
  }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewLogin);