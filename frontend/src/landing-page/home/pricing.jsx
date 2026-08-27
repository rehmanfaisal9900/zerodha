import React from 'react'

const pricing = () => {
  return (
    <div className='container'>
      <div className='row'>
         <div className='col-4'>
          <h1 className='mb-3'>Unbeatable pricing</h1>
          <p> Committed to 100% price transparency with no "gamification", hidden upfront costs, or intrusive push notifications.</p>
         <a href="" className="mx-5" style={{textDecoration:"none"}}>see pricing  &rarr;</a>
         </div>
         <div className='col-2'></div>
         <div className='col-6 mb-5'>
          <div className='row text-center'>
            <div className='col p-2 border'>
                 <h1 className='mb-3'>0</h1>
                 <p>Free equity delivery and direct <br /> mutual funds </p>
            </div>
            <div className='col border'>
                 <h1 className='mb-3'>20</h1>
                 <p>Intraday and F&amp;S </p>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default pricing