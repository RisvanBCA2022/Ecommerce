import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Recommended from './Recommended';

function Login() {
  const navigate = useNavigate();
  const { state,setState,login,setlogin } = useContext(AuthContext);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.userlogin.value;
    const password = event.target.passwordlogin.value;
    const adminusername="admin"
    const adminpassword="admin"

    const user = state.find((x) => x.firstname === username);


if(username==adminusername&&password==adminpassword){
  navigate('/admin')
  

  setlogin(a=>!a)
}
else{

    if (user && user.password === password) {
      navigate('/');
      setlogin(a=>!a)
    } else {
      alert('Register please');
      navigate('/register')
    }
  }
  }

  return (
    <>
      <Recommended />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="userlogin" className="form-label">
                      Username:
                    </label>
                    <input type="text" id="userlogin" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordlogin" className="form-label">
                      Password:
                    </label>
                    <input type="password" id="passwordlogin" className="form-control" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{background:"blue",color:"white"}} >
                      Submit
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
