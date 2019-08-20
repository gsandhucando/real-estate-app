import React from 'react';

const ViewLong = ({listing, index, square, bed, marker}) => {
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
                    <div className="user-img" />
                  </div>

                  <div>
                    <div className="user-details">
                      <span className="user-name">Gurjot Sandhu</span>
                      <span className="post-date">09/12/2019</span>
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
                  {listing.address}, {listing.state}
                </span>
              </div>
            </div>
          </div>
  )
}

export default ViewLong;