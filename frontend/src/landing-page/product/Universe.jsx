import React from 'react'
import smallcase from "../../assets/images/smallcaseLogo.png"
import streak from "../../assets/images/streakLogo.png"
import sensilbe from "../../assets/images/sensibullLogo.svg"
import funds from "../../assets/images/zerodhaFundhouse.png"
import golden from "../../assets/images/goldenpiLogo.png"
import ditto from "../../assets/images/dittoLogo.png"
const Universe = () => {
  return (
    <div className="container mt-5  "> 
        <div className="row text-center">
             <h1>The Zerodha Universe</h1>
             <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 p-3 mt-5'>
           <img src={smallcase} alt="" />
           <p className='text-small text-muted'>
             Thematic investing platform
           </p>
        </div>
        <div className='col-4 p-3 mt-5'>
           <img src={streak} alt="" style={{width:"40%"}} />
           <p className='text-small text-muted'>
            Systematic trading platform
           </p>
        </div>
        <div className='col-4 p-3 mt-5'>
           <img src={sensilbe} alt="" style={{width:"40%"}} />
           <p className='text-small text-muted'>
            Options trading platform
           </p>
        </div>
         <div className='col-4 p-3 mt-5'>
           <img src={funds} alt="" style={{width:"45%"}} />
           <p className='text-small text-muted'>
              Investment research platform
           </p>
        </div>
        <div className='col-4 p-3 mt-5'>
           <img src={golden} alt="" style={{width:"40%"}} />
           <p className='text-small text-muted'>
                Our asset management venture
           </p>
        </div>
        <div className='col-4 p-3 mt-5'>
           <img src={ditto} alt=""  style={{width:"30%"}}/>
           <p className='text-small text-muted'>
            Personalized advice on life and health insurance.
           </p>
        </div>
        <div className='text-center mt-5'>
           <button className='btn btn-primary ' style={{width:"20%",padding:"10px"}}>SignUp Now</button>
        </div>
        
        </div>
      </div>
  )
}

export default Universe