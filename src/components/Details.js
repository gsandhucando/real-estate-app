import React, { useState, useEffect } from "react";
import Data from "../data/listingData";

const Details = props => {
  let param = parseInt(props.match.params.id);
  let [listing, setListing] = useState([]);

  useEffect(() => {
    Data.filter(listing => {
      // console.log(listing.id, param)
      if (listing.id === param) {
        setListing([listing]);
      }
      return listing;
    });
  }, [param]);
  console.log(listing);

  const info = listing.map(list => {
    return (
      <div className="detailed-listing" key={list.id}>
        <div className="datails-img">
          <img src={list.image} alt="house type" />
        </div>
        <div className="propertie-header">
          <h2>Properties</h2>
        </div>
        <div className="details-house-info">
          <div className="detail-price">
            ${list.price} {list.bedrooms} bedrooms 2bathrooms {list.floorSpace}{" "}
            sqft
          </div>
          <div className="detail-address">
            {list.address} {list.city} {list.state}
          </div>
          <div className="detail-btn">
            <button>Contact Agent</button>
            <button>Take a Tour</button>
          </div>
          <div className="detail-agent">
            <div style={{ backgroundImage: `url(${list.agentImg})` }} />

            {list.agent}
          </div>
        </div>
      </div>
    );
  });

  // console.log(Data)
  return <div className="details-container">{info}</div>;
};

export default Details;
