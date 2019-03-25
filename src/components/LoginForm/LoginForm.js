import React from 'react';
import {Form, Button} from 'react-bootstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.submit = this.submit.bind(this);
    }

    onUserChange(term) {
        this.setState({username: term});
    }

    onPasswordChange(term) {
        this.setState({password: term});
    }

    submit() {
        console.log(this.state.username);
    }

    render() {
        return(
            <div className={'login-form-container'}>
                <Form>
                    <Form.Group controlId={"formBasicEmail"}>
                        <Form.Label>Login</Form.Label>
                        <Form.Control onChange={e => this.onUserChange(e.target.value)} placeholder="username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={e => this.onPasswordChange(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.submit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;