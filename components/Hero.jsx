import React, {useState, useEffect} from "react";
import {IoCloseOutline} from "react-icons/io5"

const Hero = ({
    setInputAmount,
    setLoader,
    setOpenToken,
    LOAD_TOKEN,
    token_1,
    token_2 ,
    setToken_1 ,
    setToken_2,
    swap,
}) => {
  //reset button
  const reset = ()=>{
    setToken_1("");
    setToken_2("");

  };


  return <div className="banner" id="home" style={{backgroundImage:
    `url("assets/img/banner-bg.png")`
  }}>

    <div className="illustration">
      <img src="assets/img/banner-bg-1.png" className="one" alt="" />
      <img src="assets/img/banner-bg-2.png" className="two" alt="" />
      <img src="assets/img/banner-bg-3.png" className="three" alt="" />
    </div>

    <div className="hero-area">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-6">
            <div className="banner-content wow fadeInUp"
            data-wow-duration= "0.5s"
            data-wow-delay = "0.3s"
            >

              <h3 className="subtitle">Fast and convienient</h3>
              <h1 className="head">cryptocurrency exhcnage</h1>
              <p className="text">Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. 
                A reiciendis velit deleniti possimus. 
                am c nam!</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 wow fadeInRightBig"
            data-wow-duration= "0.5s"
            data-wow-delay = "0.3s"
          >
            <div className="exchange">
              <h5 className="ex-head">crypto currency exchange</h5>
              <div className="exchange-box">
                <div className="selector">
                  <p className="text">Your change</p>
                  <div className="coin">
                    <span>{token_1?.symbol}</span>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <span onClick={()=> setOpenToken(true)}
                      >Open</span>
                      <input type="text"
                      placeholder={token_1?.symbol || "select"}
                      className="form-control"
                      onChange={(e) => setInputAmount(e.target.value)}

                     />
                  </div>
                </div>

            {
              token_1 ? (
                <span className="rate">
                  {`Balance: ${token_1?.balance.slice(0, 10)}`} ${token_1?.symbol}
                </span>
              ) : (
                "hello"
              )
            }


              </div>

            <a className="rotate">
            <img src="assets/img/exchange-img.png" alt="" 
            onClick={()=> reset()}
            />
            </a>

            <div className="exchange-box">
                <div className="selector">
                  <p className="text">Your get</p>
                  <div className="coin">
                    <span>{token_2?.symbol}</span>
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <span onClick={()=> setOpenToken(true)}
                      >Open</span>
                      <input type="text"
                      placeholder={token_2?.symbol || "select"}
                      className="form-control"
                      onClick={()=> setOpenToken(true)}

                     />
                  </div>
                </div>

            {
              token_2 ? (
                <span className="rate">
                  {`Balance: ${token_2?.balance.slice(0, 10)}`} ${token_2?.symbol}
                </span>
              ) : (
                "hello"
              )
            }


              </div>

            <a onClick={()=> swap()} className="button button-1">Exchange </a>

            </div>

          </div>
        </div>
      </div>
    </div>
    

  </div>;
};

export default Hero;
