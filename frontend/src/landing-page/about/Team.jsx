import React from 'react'
import nithinKamath from "../../assets/images/nithinkamath.jpg"
const Team = () => {
  return (
    
    <div className="container">
      <div className="row">
        <h1 className=" p-5 text-center border-top">
            People
        </h1>
      </div>

      <div className="row ">
        <div className="col-6 p-5 text-center">
          <img src={nithinKamath} alt="profile pic"   style={{borderRadius:"100%",width:"50%"}}/>
          <br />
          <br />
          <h5>nithin Kamath</h5>
          <h6>Founder , CEO</h6>
        </div>
        <div className="col-6 mt-5  text-muted" >
         <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p className="pt-2">
              Connect on <a href="#" className="text-blue-600 hover:underline">Homepage</a> / <a href="#" className="text-blue-600 hover:underline">TradingQNA</a> / <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Team