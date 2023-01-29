import ReactDOM from 'react-dom'
import React from 'react'

import "./style.css";

const OfferSectionList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="offerBoxDiv">
        <div className="offerMargin">
          <p className="card-heading">{items?.heading}</p>
          <p className='desc-p'>{items?.list2}</p>
        </div>
        <div className="offerimg">
          <img src={items?.Url} className="" />
        </div>
        <button className='card-btn'>
            <p className='btn-text'>See More</p>
        </button>
      </div>
    </>
  );
};

export default OfferSectionList;