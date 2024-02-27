import React from "react";
import "../Style/ToolsInfo.css";
import Tools from "../Assets/3.png";
function ToolsInfo() {
  return (
    <div className="tools">
      <div className="toolsInfo">
        <h3>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h3>
        <img src={Tools} alt="" className="toolsImg" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <div className="fieldWork">
          <p>
            CHEMICALS & PROCESS<span>|</span>
          </p>
          <p>
            POWER<span>|</span>
          </p>
          <p>
            WATER & WASTE WATER<span>|</span>
          </p>
          <p>
            OILS & GAS <span>|</span>
          </p>
          <p>
            PHARMA <span>|</span>
          </p>
          <p>
            SUGARS & DISTILLERIES<span>|</span>
          </p>
          <p>
            PAPER & PULP<span>|</span>
          </p>
          <p>
            MARINE & DEFENCE<span>|</span>
          </p>
          <p>
            METAL & MINING <span>|</span>
          </p>

          <p>
            FOOD & BEVERAGE <span>|</span>
          </p>
          <p id="x">
            PETROCHEMICAL & REFINERIES <span>|</span>
          </p>
          <p>
            SOLAR<span>|</span>
          </p>
          <p>
            BUILDING<span>|</span>
          </p>
          <p>
            HVAC<span>|</span>
          </p>
          <p>
            FIRE FIGHTING<span>|</span>
          </p>
          <p>AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>
    </div>
  );
}

export default ToolsInfo;
