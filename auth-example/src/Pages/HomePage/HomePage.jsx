import React from 'react';

import { userService, authenticationService } from '@/_services';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                <h1>Hi {currentUser.username}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                <img src={currentUser.userimage} />
                {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.user} {user.username}</li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export { HomePage };