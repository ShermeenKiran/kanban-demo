import { withRouter } from 'react-router';
import { Form , Button } from 'react-bootstrap';

import './Login.css';

const classes = {
  container: {
    width: '60%',
    margin: '50px auto',
    border: 'solid',
    padding: '30px',
    borderRadius: '10px',
  },
  mb: {
    marginBottom: '10px',
  }
};

function Login(props) {
  function onClick() {
    console.log("User Logged In");
    console.log("History Obj" + props);
    props.history.push('/dashboard');
  }

  return (
    <div style={classes.container}>
      <h3 style={classes.mb}>Login</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onClick}>
          Submit
        </Button>
      </Form>
    </div>
 );
}
export default withRouter(Login);