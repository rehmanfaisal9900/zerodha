import React from "react";
import eco from "../../assets/images/ecosystem.png";
const Stack = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>
          <h2 className="fs-4">Custormer-frist always</h2>
          <p className="text-muted">
            That's Why 1.5+ Crore Customers Trust Zerodha With ₹4.5+ Lakh Crores
            Of Equity Investments And Contribute To 15% Of Daily Retail Exchange
            Volumes In India.
          </p>
          <h2 className="fs-4">No Spam Or Gimmicks</h2>
          <p className="text-muted">
            No Gimmicks, Spam, "Gamification", Or Annoying Push Notifications.
            High Quality Apps That You Use At Your Pace, The Way You Like.
          </p>
          <h2 className="fs-4">Do Better With Money</h2>
          <p className="text-muted">
            With Initiatives Like Nudge And Kill Switch, We Don't Just
            Facilitate Transactions, But Actively Help You Do Better With Your
            Money.
          </p>
           <h2 className="fs-4">The zerodha universe</h2>
          <p className="text-muted">
            With Initiatives Like Nudge And Kill Switch, We Don't Just
            Facilitate Transactions, But Actively Help You Do Better With Your
            Money.
          </p>
        </div>
        <div className="col-6">
          <img src={eco} alt="ecosystem image" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our product &rarr;</a>
            <a href="" style={{textDecoration:"none"}}>Try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
