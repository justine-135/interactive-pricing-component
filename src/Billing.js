import { useState } from "react";
import { ReactComponent as Check } from "./images/icon-check.svg";

const Billing = () => {
  const [toggle, setToggle] = useState(false);
  const [bar, setBar] = useState(3);
  const [pageViews] = useState({
    1: { views: 10000, cost: 8.0 },
    2: { views: 50000, cost: 12.0 },
    3: { views: 100000, cost: 16.0 },
    4: { views: 500000, cost: 24.0 },
    5: { views: 1000000, cost: 36.0 },
  });

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
    // console.log(pageViews[bar].cost - 0.25);
    console.log(toggle);
  };

  const handleSliderBar = (e) => {
    setBar(e.target.value);
  };

  function kFormatter(num) {
    return num >= 1000 && num < 1000000
      ? (num / 1000).toFixed(1).replace(/\.0$/, "") + "K"
      : num >= 1000000 && num < 1000000000
      ? (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
      : num >= 1000000000 && num < 1000000000000
      ? (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B"
      : num >= 1000000000000 && num < 1000000000000000
      ? (num / 1000000000000).toFixed(1).replace(/\.0$/, "") + "T"
      : num;
  }

  return (
    <section>
      <div className="billing-container">
        <div className="grid-container">
          <p className="grid1">{kFormatter(pageViews[bar].views)} PAGEVIEWS</p>
          <div className="grid2">
            <div className="slidecontainer">
              <input
                type="range"
                min="1"
                max="5"
                value={bar}
                onChange={(e) => {
                  handleSliderBar(e);
                }}
              />
            </div>
          </div>
          <div className="grid3">
            <span>
              $
              {toggle
                ? (pageViews[bar].cost - 0.25).toFixed(2)
                : pageViews[bar].cost.toFixed(2)}
            </span>
            <span> / month</span>
          </div>
          <div className="grid4">
            <span>Monthly Billing</span>
            <button
              className={`switch-btn ${toggle ? "on" : "off"}`}
              onClick={handleToggle}
            >
              <span className={toggle ? "on" : "off"}></span>
            </button>
            <div className="discount-container">
              <span>Yearly Billing</span>
              <div className="discount">
                <span>-25%</span>
                <span>discount</span>
              </div>
            </div>
          </div>
        </div>
        <div className="trial-container">
          <div className="flex">
            <ul>
              <li>
                <Check className="svg" /> Unlimited websites
              </li>
              <li>
                <Check className="svg" /> 100% data ownership
              </li>
              <li>
                <Check className="svg" /> Email reports
              </li>
            </ul>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
