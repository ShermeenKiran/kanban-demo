import { withRouter } from 'react-router';
import './Login.css';

function Login(props) {

  function onClick() {
    console.log("User Logged In");
    console.log("History Obj" + props);
    props.history.push('/dashboard');
  }

  return (
    <div className="App">
                <h3 className='title'>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control , password" placeholder="Enter password" />
                </div>
                <button type="submit" onClick={onClick} className="btn btn-primary btn-block , submit">Log In</button>
    </div>
 );
}
export default withRouter(Login);