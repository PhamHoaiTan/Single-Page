import React from "react";
import { assets } from "../../assets/assets";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = ({ setShowMore, showMore, setShowLogin }) => {

  const hanldeClick = () =>{
    setShowMore(false)
  }
  return (
    <div className="ShowMore">
      <div className="showMore-container">
        <div className="cart-login">
          <div className="show-cart-dot">
            <Link to="/cart">
              <img src={assets.cart} alt="" className="show-cart" onClick={()=>setShowMore(false)} />
            </Link>
            <img src={assets.dot} alt="" className="show-dot" id='dot-img-Phone' />
          </div>
          <img
            src={assets.account}
            alt=""
            className="show-account"
            onClick={() => setShowLogin(true)}
          />
        </div>
        <div className="support-distribute">
          <button>Support</button>
          <button>Distribute</button>
        </div>
        <div className="show-button-class">
          <button className="show-download">Download</button>
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
