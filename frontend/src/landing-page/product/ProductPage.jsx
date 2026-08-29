import React from "react";
import Hero from "./Hero.jsx";
import LeftImage from "./LeftImage.jsx";
import RightImage from "./RightImage.jsx";
import Universe from "./Universe.jsx";
import kite from "../../assets/images/kite.png";
import cion from "../../assets/images/coin.png"
import varsity from "../../assets/images/varsity.png"
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
      <RightImage />
      <LeftImage
        imageUrl={cion}
        productName="cion"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage />
      <LeftImage
        imageUrl={varsity}
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </>
  );
};

export default ProductPage;
