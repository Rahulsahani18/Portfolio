import React from 'react'
import '../style/index.css'
import Icon4 from '../Images/Icon4.png'
import Icon1 from '../Images/Icon1.png'
import Icon2 from '../Images/Icon2.png'
import Icon3 from '../Images/Icon3.png'
const Services = () => {
  return (
    <>
      <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mt-5'>
                            <h1>Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
                            <p style={{ marginTop: "-13px" }}>Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row mt-md-5 mt-5 '>
                    <div className='col-md-3 d-flex justify-content-center mt-3 mt-md-0 mt-lg-0'>
                        <div className="card " style={{width: "15rem"}}>
                            <div className="card-body">
                            <img src={Icon4}/>
                            <h4 className="card-title mt-2">UI/UX</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex justify-content-center mt-3  mt-md-0 mt-lg-0'>
                        <div className="card " style={{width: "15rem"}}>
                            <div className="card-body">
                            <img src={Icon1}/>
                            <h4 className="card-title mt-2">Web Design</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex justify-content-center mt-3  mt-md-0 mt-lg-0'>
                        <div className="card " style={{width: "15rem"}}>
                            <div className="card-body">
                            <img src={Icon2}/>
                            <h4 className="card-title mt-2">App Design</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-flex justify-content-center mt-3  mt-md-0 mt-lg-0'>
                        <div className="card" style={{width: "15rem"}}>
                            <div className="card-body">
                            <img src={Icon3}/>
                            <h4 className="card-title mt-2">Graphic Design </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>

                </div>
                </div>
    </>
  )
}

export default Services