import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login(props) {

    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({email:'',passward:''});
    
      const submit = async (e)=>
      {
         e.preventDefault();
         const response = await fetch(`https://notebookapi-production.up.railway.app/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify({email:credentials.email,passward:credentials.passward})
          });
          const json = await response.json();
          console.log(json);
          if(json.success)
          {
            //save the auth token in loacalstorage and go ahead
            localStorage.setItem('token',json.authToken);
            props.showAlert("Logged in Successfully","success");
            navigate('/');
          }
      }

      const change = (e)=>
      {
        console.log(credentials);
         setcredentials({...credentials,[e.target.name]:e.target.value})
         console.log(credentials);
      }

      
    return (
        <div className='my-4'>
          <h3>Login to use NoteBook</h3>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={change} id="email" aria-describedby="emailHelp" name='email' placeholder="Enter email" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" value={credentials.passward} onChange={change} id="passward" name='passward' placeholder="Password" />
                </div>
                <button type='submit' className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
