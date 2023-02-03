import React from 'react'
import TourData from './TourData'

const Tours = ({tour}) => {
  return (
    <section>
        <div className='title'>
            <h3>Tours Data</h3>
            <div className='underline'></div>
        </div>
        <div>
            {
                tour.map((val) => {
                    return <TourData key={val.id} {...val}/>                    
                	}
                )
            }
        </div>
    </section>
  )
}

export default Tours