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
        data-wow-duration = "0.4s"
        data-wow-delay= "0.4"
        >

          <div className="platform-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-2.png" alt="" />
            </div>
            <p className="text">secure  <br /> transaction </p>
          </div>
        </div>


        <div className="col-lg-3 col-sm-6 wow fadeInUp"
        data-wow-duration = "0.5s"
        data-wow-delay= "0.5s"
        >

          <div className="platform-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-3.png" alt="" />
            </div>
            <p className="text">No limits on  <br /> exchange</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp"
        data-wow-duration = "0.6s"
        data-wow-delay= "0.6s"
        >

          <div className="platform-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-4.png" alt="" />
            </div>
            <p className="text">We have the best<br /> exchange rate</p>
          </div>
        </div>


      </div>
    </div>
  </div>;
};

export default Statistics;
