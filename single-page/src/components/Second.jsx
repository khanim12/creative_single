import React from "react";
import SecBot from "./SecBot";
import secImg from "../assets/sec.png"
import wave from "../assets/_.png"
function Second() {
  return (
      <section className="second">
          <div className="second_info">
              <div className="second_img">
                  <img src={secImg} alt="" />
              </div>
              <article className="infoGroup">
                  <img src={wave} alt="" className="pattern" />
                  <div className="info">
                      <h2>
                          <span>Design</span> is strategic
                      </h2>
                      <p>  “A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
                          lies in creative collaboration with our clients.”</p>
                      <button>Schedule a call</button>
                  </div>
              </article>
          </div>
              <SecBot />
  
    </section>
          
  
  );
}

export default Second;
