import React from "react";

class Register extends React.Component {
  state = {
    users: { name: "", age: "", DateOfBirth: "", Gender: "" },
  };

  handleSubmit = (e) => {
    this.props.handleData(this.state);
    this.props.history.replace("/home");
  };

  handleChange = (e) => {
    const users = { ...this.state.users };
    users[e.target.name] = e.target.value <= 0 ? 0 : e.target.value;
    alert("you selected", e.target.value);
    this.setState({
      users,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              name="name"
              value={this.state.users.name}
              id="name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              onChange={this.handleChange}
              id="age"
              name="age"
              value={this.state.users.age}
              type="Number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="dob">Date of Birth</label>
            <input
              onChange={this.handleChange}
              id="dob"
              name="DateOfBirth"
              value={this.state.users.DateOfBirth}
              type="date"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              name="Gender"
              id="gender"
              onChange={this.handleChange}
              value={this.state.users.Gender}
              required
            >
              <option value="Male">Male</option>
              <option value="Female" selected>
                Female
              </option>
            </select>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
