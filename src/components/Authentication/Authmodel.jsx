import React from "react";
import { Route, Redirect } from "react-router-dom";
import Modal from "../Modal/Modal";  // You can reuse the Modal component we discussed earlier
import SignUp from "./Signup"; // Import SignUp form

const AuthenticationModel = ({ match }) => {
  return (
    <Route path={`${match.path}/signup`}>
      <Modal closeModal={() => window.history.back()}>
        <SignUp />
      </Modal>
    </Route>
  );
};

export default AuthenticationModel;
