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

        <p>{user}</p>
        {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&

          
          <div className="col-md-8">
            {users.items.map((user, index) =>
              <div className="card mb-3 mt-3"  key={user.id} >
              <div class="row no-gutters">
              <div class="col-md-4">
               <img src={user.image} style={{width:200}} class="card-img" alt="..."/>
               </div>

               <div className="col-md-8">
               <div class="card-body">
               <h5 class="card-title">{user.email}</h5>
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                
               
                {
                  <button class="btn btn-primary mr-2" >Edit</button>
                }
                {
                  user.deleting ? <em> - Deleting...</em>
                  
                  : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                  :  <button class="btn btn-danger" onClick={this.handleDeleteUser(user.id)}>Delete</button>
              }
              </div>
              </div>
              </div>
              </div>
            )}
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