import React from "react";
import UsersService from "../services/users.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Users.css";


export default class Users extends React.Component {

  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    UsersService.getUsers()
    .then(users=> this.setState({ users }));
  }

  deleteUser(id) {
    const users = this.state.users.filter(user => user.id !== id);
    const userToDelete = this.state.users.find(user => user.id === id);
    this.setState({ users });
    window.parent.postMessage({
      action: 'DELETED_USER',
      user: userToDelete
    }, '*');
  }


  renderUsersTable(users) {
    return users.map((user) => {
      const { id, firstName, lastName, email } = user; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td><button type="button" className="btn btn-danger" onClick={() => this.deleteUser(id)}>Delete</button></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderUsersTable(this.state.users)}</tbody>
        </table>
      </div>
    );
  }
}
