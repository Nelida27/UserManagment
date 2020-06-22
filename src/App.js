import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { alertActions } from './actions/alert.action';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route,Router } from 'react-router-dom'
import SignInLinks from './components/layout/SignInLinks';
import {SignIn} from './components/auth/SignIn';
import NewUser from './components/admin-dashboard/NewUser';
import UsersList from './components/admin-dashboard/UsersList';
import { history } from './helpers/history';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

render() {
const { alert } = this.props;
return (
    <div className="jumbotron">
        <div className="container">
            <div >
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route exact path='/admin' component={UsersList} />
                    </Switch>
                </Router>
            </div>
        </div>
    </div>
);
}
}

function mapState(state) {
const { alert } = state;
return { alert };
}

const actionCreators = {
clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export  { connectedApp as App };


