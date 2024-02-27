import React from "react";
import Award from "../Assets/1.png";
import AwardShow from "../Assets/2.png";
import "../Style/AwardInfo.css";
function AwardInfo() {
  return (
    <div className="award">
      <div className="awardInfo">
        <div className="awardInfoLeft">
          <img src={Award} alt="" className="awardImg" />
        </div>
        <div className="awardInfoRight">
          <h2>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={AwardShow} alt="" className="awardShowImg"/>
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
    </div>
  );
}

export default AwardInfo;
