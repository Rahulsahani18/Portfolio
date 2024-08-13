import React from 'react'
import '../style/index.css'
import EllipesPhoto from '../Images/EllipsePic.png'

const Testimonials = () => {
    return (
        <>
            <div className='container '>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center '>
                            <h1>Testimonials</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
                            <p style={{ marginTop: "-13px" }}>Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                        </div>
                    </div>
                </div>
            </div>
           
           <div className='container mt-5 d-flex justify-content-center'>
            <div id="carouselExampleCaptions" className="carousel slide w-75 carouselExampleCaptions" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active  ">
                        <img  src={EllipesPhoto} className=" img-fluid EllipesPhoto w-25 float-start mt-3 p-3" alt="EllipesPhoto" />
                        <div className="carousel-caption ">
                            <p className='lh-sm ms-lg-5 text-dark'><span className='fw-bold' style={{color:'#FD6F00'}}>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='fw-bold' style={{color:'#FD6F00'}}>"</span></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={EllipesPhoto} className=" img-fluid w-25 EllipesPhoto float-start mt-3 p-3" alt="..." />
                        <div className="carousel-caption ">
                            
                        <p className='lh-sm ms-lg-5 text-dark'><span className='fw-bold' style={{color:'#FD6F00'}}>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='fw-bold' style={{color:'#FD6F00'}}>"</span></p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={EllipesPhoto} className=" img-fluid w-25 EllipesPhoto float-start mt-3 p-3" alt="..." />
                        <div className="carousel-caption ">
                            
                        <p className='lh-sm ms-lg-5 text-dark'><span className='fw-bold' style={{color:'#FD6F00'}}>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='fw-bold' style={{color:'#FD6F00'}}>"</span></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

</>
    )
}

export default Testimonials