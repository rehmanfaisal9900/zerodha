import React from "react";
import Hero from "./Hero.jsx";
import LeftImage from "./LeftImage.jsx";
import RightImage from "./RightImage.jsx";
import Universe from "./Universe.jsx";
import kite from "../../assets/images/kite.png";
import cion from "../../assets/images/coin.png"
import varsity from "../../assets/images/varsity.png"
import console from "../../assets/images/console.png"
import kiteconnect from "../../assets/images/kiteconnect.png"
const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftImage
        imageUrl={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage 
       imageUrl={console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />
      <LeftImage
        imageUrl={cion}
        productName="cion"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage 
       imageUrl={kiteconnect}
        productName="kite connect Api"
        productDescription="Build robust trading applications and connect to our platforms using HTTP/JSON APIs. If you are a startup, build your fintech app and integrate with Zerodha ecosystem."
        learnMore=""
        />
      <LeftImage
        imageUrl={varsity}
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-2">Extend your trading and investment experience even further with our partner platforms</p>
      <Universe />
    </>
  );
};

export default ProductPage;
