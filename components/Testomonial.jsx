import React from "react";

const Testomonial = () => {
  return <section className="testimonial">
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-5 text-center wow fadeInUp"
        data-wow-duration= "0.3s"
        data-wow-delay = "0.5s"
        >
          <div className="section-head">
            <h4 className="lasthead">Testimonials</h4>
            <h2 className="title">Dont jst take our word for it</h2>
            <p className="text"> Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Nesciunt doloremque deleniti itaque 
              laudantia, vel nemo minus?</p>
          </div>
        </div>
      </div>

  <div className="row">
    <div className="col-lg-12 wow fadeInUp"
            data-wow-duration= "0.3s"
            data-wow-delay = "0.5s">
              <div className="about-testimonial">
                <img src="assets/img/world-map.png" alt="" />
                <div className="client one">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi1.png')"}}>
                    <div id="myPopover" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="client two">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi2.png')"}}>
                    <div id="myPopover2" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="client three">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi3.png')"}}>
                    <div id="myPopover3" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="client four">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi4.png')"}}>
                    <div id="myPopover4" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="client five">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi5.png')"}}>
                    <div id="myPopover5" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="client six">
                  <div className="image one" 
                  style={{backgroundImage: "url('assets/img/testi6.png')"}}>
                    <div id="myPopover6" className="popover-default mypopover">
                      <div className="client-review">
                        <div className="stars">
                        {[1,2,3,4,5].map ((item, index)=> (
                             <i className="fas fa-star"></i>
                        ))}

                        
                        </div>
                        <p className="bottom-text">
                          Lorem ipsum dolor sit amet, 
                          consectetur adipisicing elit. 
                          possimus magnam quidem recusandae sed neque ullam provident.
                        </p>
                        <div className="client-info">
                          <h4 className="name">Yinks olaiya</h4>
                          <p className="postion">Ceo and founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    </div>
  </div>


    </div>
    
  </section>;
};

export default Testomonial;
