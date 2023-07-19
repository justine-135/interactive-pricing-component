import { ReactComponent as BgPattern } from "./images/bg-pattern.svg";
import { ReactComponent as CirclesPattern } from "./images/pattern-circles.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="bg-svg-container">
        <BgPattern className="bg-svg" />
      </div>
      <div className="text-container">
        <CirclesPattern className="circle-svg" />
        <h1>Simple, traffic-based pricing</h1>
        <div className="sub-heading">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
