import React from 'react'
import '../style/index.css'
import LogoImg from '../Images/logo.png'
import LogoText from '../Images/logoText.png'
const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-white">
  <div className="container">
    <a className="navbar-brand " href="#"><img src={LogoImg} className='LogoImg'/><img src={LogoText} className='LogoText'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex justify-content-md-end" id="navbarNav">
      <ul className="navbar-nav mx-3">
        <li className="nav-item ">
          <a className="nav-link  text-dark  me-md-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-dark me-md-3" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark me-md-3" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark me-md-3" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark me-md-3" href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark me-md-3" href="#">Contact</a>
        </li>
        <button type="button" className="me-md-3 DownloadCvBtN">Download CV</button>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar