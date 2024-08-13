import React from 'react'
import '../style/index.css'


const ContactMe = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='text-center '>
                            <h1>Lets Design Together</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
                            <p style={{ marginTop: "-13px" }}>Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                            <div class="mb-3 d-flex justify-content-center mt-5">
                                <input type="email" className="form-control w-50 h-25" placeholder="name@example.com" />
                                <button type="button" className=" ContactMeBtn ms-3 ">Contact Me</button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe