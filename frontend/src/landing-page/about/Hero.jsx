import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="  fs-3 mt-5 mb-5 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row mt-5 p-5 border-top">
        <div className="col-6 p-5 text-muted">
          <p>
            We kicked off operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5 text-muted" >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail investors and traders.
          </p>
          <p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              blog
            </a>{" "}
            or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
