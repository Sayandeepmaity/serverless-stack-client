import React from "react";
import { Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

export default function Routes() {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/">
        <Home />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/Login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/Notes/New">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/Notes/:id">
        <Notes />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/Settings">
        <Settings />
      </AuthenticatedRoute>
      <NotFound />
    </Switch>
  );
}