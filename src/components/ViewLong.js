import React from "react";
import { Link } from "react-router-dom";

const ViewLong = ({ listing, index, square, bed, marker }) => {
  return (
    <div key={index} className="col-md-12 col-lg-6">
      <div className="listing">
        <div
          className="listing-img"
          style={{
            background: `url("${listing.image}") no-repeat center center`,
            backgroundSize: "cover",
            minHeight: "200px"
          }}
        >
          <span className="address">{listing.address}</span>
          <div className="details">
            <div>
              <div
                className="user-img"
                style={{ backgroundImage: `url(${listing.agentImg})` }}
              />
            </div>

            <div>
              <div className="user-details">
                <span className="user-name">{listing.agent}</span>
                <span className="post-date">{listing.listingData}</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="fas fa-square">{square}</i>
                  <span>{listing.floorSpace} ft&sup2;</span>
                </div>
                <div className="bedrooms">
                  <i className="fas fa-bed">{bed}</i>
                  <span>{listing.bedrooms} bedrooms</span>
                </div>
              </div>

              <div className="view-btn">View Listing</div>
            </div>
          </div>
        </div>
        <div className="bottom-info">
          <span className="price">${listing.price} </span>
          <span className="location">
            <i className="fas fa-map-marker-alt">{marker}</i>
            <Link to={`/listing/${listing.id}`}>
              {listing.address}, {listing.state}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewLong;
