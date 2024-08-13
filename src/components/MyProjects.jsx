import React from 'react'
import '../style/index.css'
import WebDesign1 from '../Images/webDesign1.png'
import WebDesign2 from '../Images/webDesign2.png'
import WebDesign3 from '../Images/webDesign3.png'

const MyProjects = () => {
  return (
    <>
      <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center mt-5'>
                            <h1>My Projects</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
                            <p style={{ marginTop: "-13px" }}>Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                            <div className='AllBtnGroup d-lg-flex d-md-flex  justify-content-lg-evenly mt-4 justify-content-md-evenly'>
                             <button className='BtnGroup'>All</button>
                             <button className='BtnGroup'>UI/UX</button>
                             <button className='BtnGroup'>Web Design</button>
                             <button className='BtnGroup'>App Design</button>
                             <button className='BtnGroup'>Graphic Design</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5 '>
                <div className='row text-center p-4'>
                    <div className='col-md-4 col-12 p-3 '>
                      <img className='WebDesign img-fluid' src={WebDesign1}/>
                    </div>
                    <div className='col-md-4 col-12 p-3'>
                    <img className='img-fluid'  src={WebDesign2}/>
                    </div>
                    <div className='col-md-4 col-12 p-3'>
                    <img className='img-fluid' src={WebDesign3}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MyProjects;