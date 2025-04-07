import React from "react";

const Footer = () => {
  return <div className = "footer"
  style = {{backgroundImage: "url('assets/img/footer-bg.png')"}}
  >
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp"
          data-wow-duration = "03s"
          data-wow-delay  = "0.2s"
          >
            <div className="top-footer">
              <div className="logo">
                <img src="assets/img/logo.png" alt="" />
              </div>
              <a href="/" className="button-1">
              Get in touch with us</a>
            </div>
            
          </div>
        </div>

      <div className="row justify-content-between">
        <div className="col-lg-2 col-md-6 wow fadeInUp"
        data-wow-duration = "0.3s"
        data-wowo-delay= "0.3s"
        >
          <div
          className="footer-box">
            <h4 className="lasthead">Company</h4>
            <ul className="footer-link">
              {
                ["About us","Contact us", "Blog", "Affiliate"].map((item,index)=>(
                  <li key={index}>
                  <a href="#">{items}</a>
                </li>
                ))
              }
             
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 wow fadeInUp"
        data-wow-duration = "0.4s"
        data-wowo-delay= "0.4s"
        >
          <div
          className="footer-box">
            <h4 className="lasthead">support</h4>
            <ul className="footer-link">
              {
                ["FAQ","Contact Time", "how it works", "Details"].map((item,index)=>(
                  <li key={index}>
                  <a href="#">{items}</a>
                </li>
                ))
              }
             
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 wow fadeInUp"
        data-wow-duration = "0.5s"
        data-wowo-delay= "0.5s"
        >
          <div
          className="footer-box">
            <h4 className="lasthead">Company</h4>
            <ul className="footer-link">
              {
                ["Term of use","Money type", "Refund Policy", "Privacy"].map((item,index)=>(
                  <li key={index}>
                  <a href="#">{items}</a>
                </li>
                ))
              }
             
            </ul>
          </div>
        </div>




      </div>



      </div>

    
    </div>;
};

export default Footer;
