import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Register from "./components/registerForm";
import Home from "./components/home";

class App extends React.Component {
  state = {
    users: [
      // { name: "gyan", age: 1, DateOfBirth: 123, Gender: "male" },
      // { name: "gyan", age: 1, DateOfBirth: 123, Gender: "male" },
      // { name: "gyan", age: 1, DateOfBirth: 123, Gender: "male" },
    ],
  };

  handleDelete = (user) => {
    let { users } = this.state;
    users = users.filter((data) => data !== user);
    this.setState({
      users,
    });
  };

  handleData = (data) => {
    let users = [...this.state.users, data.users];
    this.setState({
      users,
    });
    console.log(users);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/register"
            render={(props) => (
              <Register handleData={this.handleData} {...props} />
            )}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Home
                users={this.state.users}
                onDelete={this.handleDelete}
                {...props}
              ></Home>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
