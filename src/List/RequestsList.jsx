import React, { Component } from "react";
import UserForm from "../Form/UserForm";
import Request from "./Request";

class RequestsList extends Component {
  state = {
    requests: [{ about: "Apple watch", id: 1 }],
  };
  onSubmit = (request) => {
    const { requests } = this.state;
    const newRequest = {
      id: Math.random(),
      request,
    };

    const updatedRequests = requests.concat(newRequest);
    this.setState({ requests: updatedRequests });
  };
  render() {
    return (
      <div className="request-list">
        {/* <UserForm onSubmit={this.onSubmit} /> */}
        <ul className="list">
          {this.state.requests.map((request) => (
            <Request {...request} key={request.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default RequestsList;
