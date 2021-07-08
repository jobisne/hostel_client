import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./Query/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import UploadForm from "./pages/UploadForm";
import Register from "./pages/Register";
import Hostel from "./pages/Hostel";
import Login from "./pages/Login";
import StudentReg from "./pages/StudentReg";
import ViewStudents from "./pages/ViewStudents";
import ViewStudent from "./pages/ViewStudent";
import UpdateStudent from "./pages/UpdateStudent"
import SearchStudent from "./pages/SearchStudent";
import { ConfirmProvider } from "material-ui-confirm";
import OurProject from "./pages/OurProject";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/uploadForm" component={UploadForm} />
          <AuthRoute exact path="/register" component={Register} />  
          <AuthRoute exact path="/login" component={Login} />
          <Route exact path="/hostel/:postId" component={Hostel} />
          <ConfirmProvider>
            <Route exact path="/view/:postId" component={ViewStudents} />
          </ConfirmProvider>
          <Route exact path="/editStudent/:postId" component={UpdateStudent} />
          <Route exact path="/viewStudent/:postId" component={ViewStudent} />
          <Route exact path="/registration" component={StudentReg} />
          <Route exact path="/search" component={SearchStudent} />
          <Route exact path="/ourproject" component={OurProject} />



        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
