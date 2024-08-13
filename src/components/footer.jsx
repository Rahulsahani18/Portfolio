import React from 'react'
import '../style/index.css'
import LogoImg from '../Images/logo.png'
import LogoText from '../Images/logoText.png'


const footer = () => {
  return (
    <>
      <div className='row Footer mt-5'>
        <div className='col-md-12'>
          <div className='mt-5 text-center'>
            <img src={LogoImg} className='LogoImg' /><img src={LogoText} className='LogoText' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='mt-4  text-center d-flex flex-column d-md-flex flex-md-row  justify-content-md-center d-lg-flex flex-lg-row justify-content-lg-center '>
              <span className='me-lg-5 me-md-5 FooterText'>Home</span>
              <span className='me-lg-5 me-md-5 FooterText'>About Me</span>
              <span className='me-lg-5 me-md-5 FooterText'>Services</span>
              <span className='me-lg-5 me-md-5 FooterText'>Projects</span>
              <span className='me-lg-5 me-md-5 FooterText'>Testimonials</span>
              <span className='me-lg-5 me-md-5 FooterText'>Contact</span>
            </div>


            <div className='mt-4  text-center FooterIcons'>
              <i className="fa-brands fa-facebook me-3"></i>
              <i className="fa-brands fa-twitter me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
              <i className="fa-brands fa-linkedin "></i>
            </div>

          </div>
        </div>

        <div className='row FooterPrivacy pb-3 mt-3'>
          <div className='col-md-12 text-center text-white mt-3'>
            <span>© 2023 <span className='fw-bold' style={{ color: "#FD6F00" }}>Mumair</span> All Rights Reserved , Inc.</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default footer;