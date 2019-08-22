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
        <div className="prop-details">
          <div className="propertie-header">
            <h2>{list.houseType}</h2>
          </div>
          <div className="details-house-info">
            <div className="detail-price">
              ${list.price} | {list.bedrooms} bedrooms | {list.floorSpace} sqft
            </div>
            <div className="detail-address">
              {list.address} {list.city} {list.state}
            </div>
            <div className="img-info-container">
              <div
                className="agent-img"
                style={{ backgroundImage: `url(.${list.agentImg})` }}
              />

              {list.agent}
            </div>
            <div className="detail-btn">
              <button>Contact Agent</button>
              <button>Take a Tour</button>
            </div>
            <div className='about-property'>
              <p>
              Classic {list.houseType} with beautifully remodeled interior.  {list.bedrooms} bedrooms, {list.floorSpace}± sqft of living space.  Updated {list.houseType} features wide vinyl plank flooring, recessed lighting, vaulted ceilings, & lots of natural light in open floorplan living space.  Gourmet kitchen with stainless steel appliances, dual ovens, gas cooktop, quartz countertops, modern subway tile backsplash, and additional bar seating.  Master bedroom suite includes walk-in closet with extensive built-in storage, and elegant master bath with floor-to-ceiling tile, luxurious soaking tub, and frameless glass stall shower.  Front yard with well-maintained, drought resistant landscaping and backyard with patio, shaded pergola, and grassy lawn, ideal for outdoor entertaining. Great location in quiet neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // console.log(Data)
  return <div className="details-container">{info}</div>;
};

export default Details;
