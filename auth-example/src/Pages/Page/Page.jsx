import React from 'react';

import { userService, authenticationService } from '@/_services';

import { Link } from 'react-router-dom';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Welcome to Page !</h1>
            </>
        );
    }
}



export { Page };