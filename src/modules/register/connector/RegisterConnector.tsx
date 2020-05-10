import React from "react";
import RegisterView from "../ui/RegisterView";
import RegisterController from "../controller/RegisterController";

export default class RegisterConnector extends React.Component {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
