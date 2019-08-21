import React from "react";
import ViewBox from './ViewBox';
import ViewLong from './ViewLong';

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

const Listings = ({ data, change, view, changeViewBox, changeViewLong, mobile }) => {
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
         <ViewBox key={index} data={data} listing={listing} index={index} square={square} bed={bed} marker={marker} />
        )
      } else {
        //this is the longview
        return (
          <ViewLong key={index} data={data} listing={listing} index={index} square={square} bed={bed} marker={marker} />

        );
      }
    });
  };

  return (
    <section id={!mobile ? "listings" : 'mobile-listings'}>
      <section className="search-area">
        <input onChange={change} type="text" name="search" placeholder='Search by city'/>
      </section>
      <section className="sortby-area">
        <div className="results">{data.length} results found</div>
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

      <div className='row'>
      <section className="listings-results">{loopListings()}</section>
      </div>
      <div className='row'>
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
      </div>
    </section>
  );
};

export default Listings;
