import React from 'react'
import largest from "../../assets/images/largestBroker.svg"
import press from "../../assets/images/pressLogos.png"
const Awards = () => {
  return (
    <div className='container mt-5 '>
      <div className='row'>
        <div className='col-6 p-6'>
           <img src={largest} alt="award image" />
        </div>
         <div className='col-6 p-6 mt-3'>
            <h1>Largest stocks brokers India</h1>
            <p className='mb-5'>2+ million of Zerodha client contributes to over 15% of all retails orders volumes in india dailys by trading and investing in: </p>
            <div className='row'>
              <div className='col-6'>
                <ul>
              <li>
                <p>Future and options </p>
              </li>
               <li>
                <p>Commodity derivatives </p>
              </li>
               <li>
                <p>Currancy derivatives</p>
              </li>
            </ul>
              </div>
              <div className='col-6'>
                <ul>
              <li>
                <p>Stocks and ios </p>
              </li>
               <li>
                <p>Direct mutualsfunds</p>
              </li>
               <li>
                <p>derivatives current</p>
              </li>
            </ul>
              </div>
            </div>
            <img src={press} alt=" presslogos image" style={{width:"80%"}} />
        </div>
      </div>
    </div>
  )
}

export default Awards