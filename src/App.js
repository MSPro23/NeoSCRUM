import "./App.css";
import RegisterPage from "./components/RegisterationPage/RegisterPage";
import LoginPg from "./components/LoginPage/LoginPg";
import DashBoardPage from "./components/DashBoard/DashBoardPage";
import EnterPage from "./components/GiveFeedPage/EnterPage";
// import { useState } from "react";
import ForgotPasswordPage from "./components/ForgotPassword/ForgotPasswordPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPg} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/dashboard" exact component={DashBoardPage} />
        <Route path="/feedback" exact component={EnterPage} />
        <Route path="/forgotpassword" exact component={ForgotPasswordPage} />
      </Switch>
    </Router>
  );
}

export default App;
