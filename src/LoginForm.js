import React,{Component} from 'react';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';

class LoginForm extends Component {
    render() {
        return(
            <div style={{height: '100%'}}>
            <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
                
                <Grid textAlign='center' style={{height:'100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header color='pink' as='h2' textAlign='center'>Log-in to your account</Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid placeholder='Username' />
                                <Form.Input fluid placeholder='Password' type='password' />
                                <Button color='pink' fluid>Login</Button>
                            </Segment>
                        </Form>
                        <Message color='pink'>No account? <a href='#'>Sign Up</a></Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginForm;