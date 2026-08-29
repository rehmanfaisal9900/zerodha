import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 text-center border-top'>
        <div className='col-8 p-4'>
          <a href="" style={{textDecoration:"none"}}><h3 className='fs-6' >brokerage calculator →</h3>
          </a>
           <ul style={{textAlign:"left",lineHeight:"2"}} className='text-muted mt-4 fs-6'>
            <li>All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</li>
            <li>lat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity.</li>
            <li>currency, and commodity trades. Flat ₹20 on all option trades.</li>
            <li>All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.</li>
            <li>₹2,000/month for trade execution API. Historical API at ₹2,000/month.</li>
          </ul>
        </div>
        <div className='col-4 p-4'>
        <a href="" style={{textDecoration:"none"}}> <h3 className='fs-6'>List of charges →</h3></a> 
        </div>
         
      </div>
    </div>
  )
}

export default Brokerage