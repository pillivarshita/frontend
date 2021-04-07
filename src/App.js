import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route,  NavLink } from "react-router-dom";
import "./App.css";
import AddPayment from "./components/AddPayment";
import UpdatePayment from "./components/UpdatePayment";
import ViewPayment from "./components/ViewPayment";
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';
import AddLogin from './components/AddLogin';
import ViewLogin from './components/ViewLogin';
import ChangePassword from './components/ChangePassword';
import ViewCollege from "./components/ViewCollege";
import AddCollege from "./components/AddCollege";
import UpdateCollege from "./components/UpdateCollege";


function App() {
  return (
    <Router>
      <div  id="bimg" className="container-fluid "  style={{
            backgroundImage:`url("https://presidencyuniversity.in/content/uploads/2017/07/Infra_04.jpg")` ,
            backgroundSize: "cover",
            height:"100vh"}} >
      <div className="App">
        <>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Online Admission System</Navbar.Brand>
            <ul className="navbar-nav float-right">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                variant="dark"
              ></Navbar.Collapse>


              
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewlogin">
                    View Login
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addlogin" variant="dark">
                    Add Login
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>
            </ul>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
               <ul>
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  
                  <NavLink className="nav-link active" aria-current="page" to="/viewuser">
                    View User
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/adduser" variant="dark">
                    Add User
                  </NavLink>
                </NavDropdown.Item>
                </ul>
              </Nav>  
            </NavDropdown>
            

             <NavDropdown title="Payment" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    View Payment
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addpayment" variant="dark">
                    Add Payment
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="College" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewcollege">
                    View College
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcollege" variant="dark">
                    Add College
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>
          </Navbar>
          <br />
        </>
        <Switch>
          <Route exact path="/">
            <ViewPayment />
          </Route>

          <Route path="/addpayment">
            <AddPayment />
          </Route>
          <Route path="/updatepayment/:paymentId" component={UpdatePayment}></Route>

           <Route exact path="/viewuser">
            <ViewUser />
          </Route>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/updateuser/:userId" component={UpdateUser}></Route>
          <Route exact path="/addlogin">
            <AddLogin />
          </Route>
          <Route path="/viewlogin">
            <ViewLogin />
          </Route>
          <Route path="/change/:userId" component={ChangePassword}></Route>

          <Route path="/addcollege">
            <AddCollege />
          </Route>

          <Route path="/updatecollege/:collegeRegId" component={UpdateCollege}></Route>
          <Route path="/">
            <ViewCollege />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
export default App;