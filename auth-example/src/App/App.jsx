import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { Page } from '../Pages/Page';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/user" className="nav-item nav-link">User</Link>
                            <Link to="/page" className="nav-item nav-link">Page</Link>
                            {currentUser &&
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            }
                        </div>
                    </nav>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute exact path="/user" component={Page} />
                                    <Route exact path="/page" component={Page} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* credits  */}
                    <div class="text-center">
                        <p>
                            <a href="http://jasonwatmore.com/post/2019/04/06/react-jwt-authentication-tutorial-example" target="_top">React - JWT Authentication Tutorial with Example</a>
                        </p>
                        <p>
                            <a href="http://jasonwatmore.com" target="_top">JasonWatmore.com</a>
                        </p>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 