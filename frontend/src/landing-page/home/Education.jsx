import React from "react";
import educa from "../../assets/images/education.svg"
const Education = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6">
          <img src={educa} alt="education image "  style={{width:"80%"}}/>
        </div>
        <div className="col-6">
          <h1 className="mb-3">Free and open market education </h1>
          <p className="mb-3">
            Committed to 100% price transparency with no "gamification", hidden
            upfront costs, or intrusive push notifications.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
          versity &rarr;
          </a> 
          <p >
            Committed to 100% price transparency with no "gamification", hidden
            upfront costs, or intrusive push notifications.
          </p>
          <a href=""  style={{ textDecoration: "none" }}>
          Trading Q&A &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
