import React from 'react'

const RightImage = ({
  imageUrl,
  productName,
  productDescription,
  learnMore}) => {
  return (
    <div className="container "> 
        <div className="row">
             <div className="col-6 mt-5 p-5">
                <h1 className='mt-5 p-5'>{productName}</h1>
                <p className='mt-3'>{productDescription}</p>
                <div className="mb-4">
                   <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
                </div>
             </div>
               <div className="col-6 mt-5 ">
                 <img src={imageUrl} alt="" />
            </div>
        </div>
      </div>
  )
}

export default RightImage