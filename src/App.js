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
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import ViewCourse from './components/ViewCourse';
import AddBranch from './components/AddBranch';
import ViewBranch from './components/ViewBranch';
import UpdateBranch from './components/UpdateBranch';
import AddProgram from './components/AddProgram';
import ViewProgram from './components/ViewProgram';
import UpdateProgram from './components/UpdateProgram';
import AddProgramScheduled from './components/AddProgramScheduled';
import UpdateProgramScheduled from './components/UpdateProgramScheduled';
import ViewProgramScheduled from './components/ViewProgramScheduled';

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

            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewcourse">
                    View Course
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcourse" variant="dark">
                    Add Course
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

            <NavDropdown title="Branch" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/branches">
                    View Branch
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addbranch" variant="dark">
                    Add Branch
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

            <NavDropdown title="Program" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/programs">
                    View Program
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addprogram" variant="dark">
                    Add Program
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

            <NavDropdown title="Program Schedule" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/programschedule">
                    View ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addprogramschedule" variant="dark">
                    Add ProgramSchedule
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

          <Route exact path="/viewcourse">
            <ViewCourse />
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/updateCourse/:courseId" component={UpdateCourse}></Route>

          <Route exact path="/branches">
            <ViewBranch />
          </Route>
          <Route path="/addbranch">
            <AddBranch />
          </Route>
          <Route path="/updateBranch/:branchId" component={UpdateBranch}></Route>

          <Route exact path="/programs">
            <ViewProgram />
          </Route>
          <Route path="/addprogram">
            <AddProgram />
          </Route>
          <Route path="/updateProgram/:programId" component={UpdateProgram}></Route>

          <Route exact path="/programScheduled">
            <ViewProgramScheduled />
          </Route>
          <Route path="/addprogramScheduled">
            <AddProgramScheduled />
          </Route>
          <Route path="/updateProgramScheduled/:scheduleId" component={UpdateProgramScheduled}></Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}
export default App;