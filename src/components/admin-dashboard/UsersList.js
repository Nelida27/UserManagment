import React from 'react';
import { userActions } from '../../actions/user.action';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }
  render() {
    const { user, users } = this.props;
    return (

      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
      
            <li className="nav-item">
              <span className="nav-link" ><Link to="/newuser">New User</Link></span>

            </li>
            <li className="nav-item">
              <span className="nav-link" href="#"><Link to="/">Logout</Link></span>
            </li>
          
          </ul>
        </nav>


        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&
          <ul>
            {users.items.map((user, index) =>
              <li key={user.id}>
                {user.email + ' ' + user.password}
                {
                  user.deleting ? <em> - Deleting...</em>
                  : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                  : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
              }
              </li>
            )}
          </ul>
        }

      </div>
    )
  }
}
function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(UsersList);
export { connectedHomePage as UsersList };