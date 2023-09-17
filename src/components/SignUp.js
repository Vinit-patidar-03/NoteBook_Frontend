import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp(props) {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ name: '', email: '', passward: '', cpassward: '' });

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://notebookapi.vercel.app/api/auth/createUser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, passward: credentials.passward })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token in loacalstorage and go ahead
      localStorage.setItem('token', json.authToken);
      props.showAlert("Your account has been created successfully", "success");
      navigate('/');
    }
  }

  const change = (e) => {
    // console.log(credentials);
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
    //  console.log(credentials);
  }

  return (
    <div className='my-4'>
      <h3>Create an account to use NoteBook</h3>
      <form>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={change} placeholder="Enter name" autoComplete='name' />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={change} required minLength={1} placeholder="Enter email" autoComplete='email' />
        </div>
        <div className="form-group my-3">
          <label htmlFor="passward">Create Password</label>
          <input type="password" className="form-control" id="passward" name='passward' onChange={change} required minLength={5} placeholder="Password" autoComplete='password' />
        </div>
        <div className="form-group my-3">
          <label htmlFor="cpassward">Confirm Password</label>
          <input type="password" className="form-control" id="cpassward" name='cpassward' onChange={change} required minLength={5} placeholder="Password" autoComplete='confirm-password' />
        </div>
        <button type="submit" className="btn btn-primary" id='btn' onClick={submit}>Submit</button>
      </form>
    </div>
  )
}

export default SignUp