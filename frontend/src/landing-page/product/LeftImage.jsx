import React from "react";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg"
import appStoreBadge from "../../assets/images/appStoreBadge.svg"
const LeftImage = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
  <div className="container "> 
    <div className="row">
        <div className="col-6 p-3 mt-4">
             <img src={imageUrl} alt="" />
        </div>
         <div className="col-6 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="mb-4">
               <a href={tryDemo}>try demo</a>
               <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
            </div>
            <a href={googlePlay}><img src={googlePlayBadge} alt="google play " /></a>
            <a href={appStore}><img src={appStoreBadge} style={{marginLeft:"50px"}}  alt="app store" /></a>
         </div>
    </div>
  </div>
  )
};


export default LeftImage;
