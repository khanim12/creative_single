import React from 'react'
import firstImg from '../assets/Bitmap.png'
function First() {
    return (
      <section className="first">
    <div className='first_info'>
      <h1>Branding &
              website design agency</h1>
          <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
          <button>Learn More</button>
            </div>
            <div className="image">
            <img src={firstImg} alt="" />

            </div>
            </section>
  )
}

export default First
