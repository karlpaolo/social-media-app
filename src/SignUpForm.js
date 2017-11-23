import React, {Component} from 'react';
import {Button, Form, Header, Grid, Segment, Message} from 'semantic-ui-react';


class SignUpForm extends Component {
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
              <Header color='pink' as='h2' textAlign='center'>Create your account</Header>
              <Form size='large'>
                  <Segment stacked>
                      <Form.Input fluid placeholder='Name' />
                      <Form.Input fluid placeholder='Password' type='password' />
                      <Form.Input flud placeholder='E-mail Address' />
                      <Button color='pink' fluid>Login</Button>
                  </Segment>
              </Form>
              <Message color='pink'>I forgot my password <a href='#'>Recover my Account</a></Message>
          </Grid.Column>
      </Grid>


            </div>
        );
    }
}

export default SignUpForm;