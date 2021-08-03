import React from 'react';
import './Couponcards.css';
import { CouponCodes } from './Couponcodes';
function Coupons() {
  return (
    <div className="grandparent">
      <h1>OFFERS</h1>
      <div className="parent">
        {CouponCodes.map((coupon, index) => {
          return (
            <div className="child">
              <h3>{coupon.title}</h3>
              <span>Get {coupon.discount} off</span>
              {'\n'}
              <span>CODE: {coupon.Code}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Coupons;