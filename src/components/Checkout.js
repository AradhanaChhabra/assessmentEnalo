import React from 'react';
import style from './Checkout.module.css';

const Checkout = ({details}) => {
    return <div className={style.checkoutContainer}>
        <label className={style.labels}>Purpose of Payment</label>
        <p>{details.purpose}</p>

        <div className={style.spaceBw}>
            <p>Amount</p>
            <p>₹ {details.amount}</p>
        </div>

        <div className={`${style.spaceBw} ${style.convFeeDiv}`}>
            <div className={style.convFee}>
                <p> {'>'} </p>
                <p>Convenience fee</p>
            </div>
            <p>₹ 164.09</p>
        </div>

        <hr className={style.hr} />
        
        <div className={`${style.spaceBw} ${style.total}`}>
            <p>Total</p>
            <p>₹ {164.09 + parseInt(details.amount)}</p>
        </div>

        <hr className={style.hr} />

        <p> Your Details  {" > "}  Payment</p>

        <hr className={style.hr} />


      
  </div>;
};

export default Checkout;
