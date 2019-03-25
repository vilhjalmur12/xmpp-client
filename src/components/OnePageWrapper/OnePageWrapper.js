import React from 'react';

import LoginForm from '../LoginForm/LoginForm';

class OnePageWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'one-page-wrapper'}>
                <LoginForm/>
            </div>
        );
    }
}

export default OnePageWrapper;