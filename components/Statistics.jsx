import React from "react";

const Statistics = () => {
  return <div className="statistic">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 wow fadeInUp"
        data-wow-duration = "0.3s"
        data-wow-delay= "0.5s"
        >

          <div className="platform-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-1.png" alt="" />
            </div>
            <p className="text">Extra fast <br /> </p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp"
        data-wow-duration = "0.4"
        data-wow-delay= "0.4s"></div>

      </div>
    </div>
  </div>;
};

export default Statistics;
