import React from "react";
import { Link } from "react-router-dom";

const ViewBox = ({ listing, index, square, bed, marker }) => {
  // console.log(listing.id);
  return (
    <div key={index} className="col-md-3">
      <div className="listing">
        <div
          className="listing-img"
          style={{
            background: `url("${
              listing.image
            }") center center / cover no-repeat`,
            backgroundSize: "cover",
            minHeight: "200px"
          }}
        >
          <span className="address">{listing.address}</span>
          <div className="details">
            {/* <div> */}
              {/* <div
                className="user-img"
                style={{ backgroundImage: `url(${listing.agentImg})` }}
              /> */}
            {/* </div> */}

            <div className="col-md-9">
              <div className="user-details">
            <div
                className="user-img"
                style={{ backgroundImage: `url(${listing.agentImg})` }}
              />
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

              <div className="view-btn">
                <Link to={`/listing/${listing.id}`}>View Listing</Link>
              </div>
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

export default ViewBox;
