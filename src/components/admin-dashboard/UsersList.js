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
   
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
          <ul className="navbar-nav ">
      
            <li className="nav-item">
              <span className="nav-link " ><Link to="/newuser" className="text-white">New User</Link></span>

            </li>
            <li className="nav-item ">
              <span className="nav-link " ><Link to="/" className="text-white ">Logout</Link></span>
            </li>
          
          </ul>
        </nav>

        
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&

          <div className="row justify-content-center">
          <div className="col-md-8">
            {users.items.map((user, index) =>
              <div className="card mb-3 mt-3"  key={user.id} >
              <div className="row no-gutters">
              <div className="col-md-4">
               <img src={user.image} style={{width:200}} className="card-img" alt="..."/>
               </div>

               <div className="col-md-8">
               <div className="card-body">
               <h6 className="card-text">Username: {user.username}</h6>
               <p className="card-text">Email: {user.email}</p>
               <p className="card-text">Phone: {user.phone}</p>
               <p className="card-text">Address: {user.address}</p>
               <p className="card-text">{user.linkedin}</p>
                
               
                {
                  <button className="btn btn-primary mr-2" >Edit</button>
                }
                {
                  user.deleting ? <em> - Deleting...</em>
                  
                  : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                  :  <button className="btn btn-danger" onClick={this.handleDeleteUser(user.id)}>Delete</button>
              }
              </div>
              </div>
              </div>
              </div>
              
            )}
          </div>
          </div>
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