import React from 'react'
import {NavLink} from 'react-router-dom'

const Common = (props) => {
  return (
    <section id='header' className=''>
      <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1>
                    This is the example
                  </h1>
                  <h2 className='my-3'>
                    {props.name}
                  </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>Geting Started</NavLink>
                  </div>
                </div>
               
            </div>
        </div>
      </div>
      </section>
  )
}

export default Common