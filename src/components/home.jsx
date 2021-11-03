import React from "react";

class Home extends React.Component {
  render() {
    const { users, onDelete } = this.props;
    console.log(users);
    if (users.length === 0) return <h3>No Data are Available</h3>;
    return (
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.DateOfBirth}</td>
                <td>{user.Gender}</td>
                <td>
                  <button
                    onClick={() => onDelete(user)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
