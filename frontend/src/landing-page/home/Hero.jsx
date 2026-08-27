import React from 'react'
import HOME from "../../assets/images/homeHero.png"
const Hero = () => {
  return (
    <div className='container p-5 '>
      <div className='row text-center'>
       <img src={HOME} alt="hero image"  className='mb-5'/>

       <h1 className='mt-5'>Invest in EveryThing</h1>
       <p>online platfron to invest in stocks,derivatives , mutual funds, and more</p>
       <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
      </div>
      
    </div>
  )
}

export default Hero