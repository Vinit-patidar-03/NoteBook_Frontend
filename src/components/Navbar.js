import React,{useEffect} from 'react'
import {Link,useLocation, useNavigate} from 'react-router-dom'
import { faNewspaper} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Navbar(props) {
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    
  }, [location]);

  const Logout = ()=>
  {
    localStorage.removeItem('token');
    props.showAlert("Logged out Successfully","success")
    navigate('/login');
  }
  return (
    <>
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faNewspaper} className='fa-2x mx-3' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className={`nav-link ${location.pathname==='/'?"active":''} ${localStorage.getItem('token')?'':'d-none'}`} aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className={`nav-link ${location.pathname==='/about'?"active":''} ${localStorage.getItem('token')?'':'d-none'}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
      </form>: <button className='btn btn-primary' onClick={Logout}>Logout</button>}
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar