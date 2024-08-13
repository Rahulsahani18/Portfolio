import React from 'react'
import '../style/index.css'
import MyProjects from './MyProjects';
import Services from './Services';
import Testimonials from './Testimonials';
import ConatctMe from './ContactMe';

import Photo1 from '../Images/profilePic.png'
import Ellips from '../Images/Ellipse.png'
import Photo2 from '../Images/Photo2.png'
import Group from '../Images/Group1.png'

const index = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 col-12'>
                        <div className=''>
                            <p className=''>Hi I am</p>
                            <h6 className='fw-bold NameText' style={{ color: " #FD6F00" }}>Muhammad Umair </h6>
                            <h1 className='fw-bold text-dark NameText' style={{ fontSize: "45px" }}>UI & UX</h1>
                            <h1 className=' fw-bold text-dark NameText' style={{ marginLeft: "7rem", fontSize: "45px" }}>Designer</h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                            <button type="button" className="me-md-3 HireMebtn">Hire Me</button>
                        </div>
                    </div>
                    <div className='col-md-6  text-lg-end text-center col-12'>
                        <div className=' mt-3'>
                            <img className='Ellipse' alt='Profile' src={Ellips} />
                            <img className='ProfilePhoto' alt='Profile' src={Photo1} />

                        </div>
                        <div className='mt-3 text-lg-end text-center Icons'>
                            <i className="fa-brands fa-facebook me-3"></i>
                            <i className="fa-brands fa-twitter me-3"></i>
                            <i className="fa-brands fa-instagram me-3"></i>
                            <i className="fa-brands fa-linkedin "></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                <div className='col-md-6  text-lg-start text-center col-12'>
                        <div className=' mt-3'>
                            <img className='Ellipse' alt='Profile' src={Ellips} />
                            <img className='ProfilePhoto' alt='Profile' src={Photo2} />

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mt-4'>
                            <h2 >About Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                            <img className='Group' src={Group} alt='Group' />

                        </div>
                    </div>
                </div>
            </div>

          <Services/> 
          <MyProjects/>
          <Testimonials/>
          <ConatctMe/>
        </>
    )
}

export default index