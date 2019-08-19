import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faTh,
  faSquare,
  faBed,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

//font awesome incons
const list = <FontAwesomeIcon icon={faList} />;
const th = <FontAwesomeIcon icon={faTh} />;
const square = <FontAwesomeIcon icon={faSquare} />;
const bed = <FontAwesomeIcon icon={faBed} />;
const marker = <FontAwesomeIcon icon={faMapMarker} />;

const Listings = ({ data, change, view, changeViewBox, changeViewLong }) => {
  //function running each looped listing with all the properties
  const loopListings = () => {
    const dataListing = data;
    // console.log(data, "listing");

    if (dataListing === undefined || dataListing.length === 0) {
      return "Sorry No Properties Avaiable.";
    }

    return dataListing.map((listing, index) => {
      if (view === 'box') {
        return (
          //this is the boxview
          <div key={index} className="col-md-3">
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
                  <div className="col-md-3">
                    <div className="user-img" />
                  </div>

                  <div className="col-md-9">
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
        );
      } else {
        //this is the longview
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
                  <div className="col-md-3">
                    <div className="user-img" />
                  </div>

                  <div className="col-md-9">
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
        );
      }
    });
  };

  return (
    <section id="listings">
      <section className="search-area">
        <input onChange={change} type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div className="results">390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby" onChange={change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-list" onClick={changeViewLong()}>{list}</i>
            <i className="fas fa-th" onClick={changeViewBox()}>{th}</i>
          </div>
        </div>
      </section>

      <section className="listings-results">{loopListings()}</section>
      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>
  );
};

export default Listings;
