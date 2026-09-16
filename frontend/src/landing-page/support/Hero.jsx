import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid' id='support'>
      <div className='p-4 mt-3' id='supportRow'>
       <h3>support portal</h3>
       <a href="">Track Ticket </a>
      </div>
       <div className=' row p-4 mx-5'>
        <div className=' col-6 p-4'>
        <h2 className='fs-4'>Search for an answer or browse help topics below to learn more</h2>
        <input 
            type="text" 
            placeholder="Eg: how do i activate F&O, why is my order rejected..." 
          
          /> <br />
          <a href="#" class="hover:text-gray-200">Track account opening</a>
          <a href="#" class="hover:text-gray-200">Track segment activation</a>
          <a href="#" class="hover:text-gray-200">Intraday margins</a><br />
          <a href="#" class="hover:text-gray-200">Kite user manual</a>
        </div>
        <div className=' col-6 p-4 '>
         <h2 className='fs-4'>Featured</h2>
         <ol>
           <li><a href="#" class="hover:text-gray-200">Surveillance measure on scrips - September 2026</a></li>
         <li><a href="#" class="hover:text-gray-200">Rights Entitlements listing in September 2026</a></li>
         </ol>
        
        </div>
      </div>
      
    </section>
  )
}

export default Hero