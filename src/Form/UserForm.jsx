import React from "react";
import CreateRequestName from "../List/CreateRequestName";
import "./userForm.css";

class UserForm extends React.Component {
  state = {
    city_from: "",
    city_to: "",
    type: "",
    data: "",
    about: "",
  };
  handleSubmit = () => {
    // event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state.about);
  };
  handleChange = (event) => {
    // const { name, value } = event.target;

    // this.setState({
    //   [name]: value,
    // });
    this.setState({
      about: event.tatget.value,
    });
  };

  // };
  render() {
    return (
      <form
        className="login-form"
        onSubmit={() => this.props.onSubmit(this.state)}
      >
        <h1 className="form-title">Request creation form</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="city_from">
            The city from which the parcel is sent
          </label>
          <input
            className="form-input"
            value={this.state.city_from}
            type="text"
            id="name"
            name="city_from"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="city_to">
            The city to which the parcel is sent
          </label>
          <input
            className="form-input"
            value={this.state.city_to}
            type="text"
            id="name"
            name="city_to"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="type" htmlFor="type">
            Type of parcel
          </label>
          <select
            value={this.state.type}
            onChange={this.handleChange}
            name="type"
            className="form-input"
          >
            <option value="gadgets">gadgets</option>
            <option value="drinks">drinks</option>
            <option value="clothes">clothes</option>
            <option value="medicines">medicines</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="data">
            Data
          </label>
          <input
            className="form-input"
            value={this.state.data}
            type="date"
            id="name"
            name="data"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            Parcel description
          </label>
          <textarea
            name="about"
            value={this.state.about}
            onChange={this.handleChange}
            className="form-input"
          ></textarea>
          {/* <CreateRequestName /> */}
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
