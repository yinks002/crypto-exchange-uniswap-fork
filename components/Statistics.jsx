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

  <div className="col-12">
    <div className="content">
      <div className="bg-pic">
        <img src="./assets/img/stasictic-bg.png" alt="" />
      </div>
      <div className="section-head text-center wow fadeInUp"
       data-wow-duration = "0.5s"
        data-wow-delay= "0.5s"
      >
        <h4 className="lasthead">Out stats say more than our words</h4>
        <h2 className="title">Today's statistics</h2>
        <p className="text">Lorem ipsum dolor sit, 
          amet consec  
          est hic natus magnam?</p>

      </div>

  <div className="row justify-content-center">
    <div className="col-xl-4 col-lg-6 wow fadeInUp"
     data-wow-duration = "0.5s"
     data-wow-delay= "0.5s"
     >
      <div className="statis-boxx">
        <div className="icon">
          <img src="assets/img/statistic-icon-1.png" alt="" />
        </div>
        <div className="statis-content">
          <h3 className="suntitle">984</h3>
          <p className="text">Transactions made</p>
        </div>
      </div>
     </div>

     <div className="col-xl-4 col-lg-6 wow fadeInUp"
     data-wow-duration = "0.5s"
     data-wow-delay= "0.5s"
     >
      <div className="statis-boxx">
        <div className="icon">
          <img src="assets/img/statistic-icon-1.png" alt="" />
        </div>
        <div className="statis-content">
          <h3 className="suntitle">7 Minutes</h3>
          <p className="text">Average processing time </p>
        </div>
      </div>
     </div>


     <div className="col-xl-4 col-lg-6 wow fadeInUp"
     data-wow-duration = "0.5s"
     data-wow-delay= "0.5s"
     >
      <div className="statis-boxx">
        <div className="icon">
          <img src="assets/img/statistic-icon-1.png" alt="" />
        </div>
        <div className="statis-content">
          <h3 className="suntitle">Eth/YKT</h3>
          <p className="text">Today's favorite pair</p>
        </div>
      </div>
     </div>
  </div>


    </div>
  </div>


      </div>
    </div>
  </div>;
};

export default Statistics;
