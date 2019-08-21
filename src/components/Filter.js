import React, { useEffect } from "react";

const Filter = ({
  change,
  min_price,
  max_price,
  min_floor_space,
  max_floor_space,
  elevator,
  swimming_pool,
  finished_basement,
  gym,
  populateFormsAction,
  populateFormsData,
  mobile
}) => {
  useEffect(() => {
    populateFormsAction()
  }, []);

  // let cities = populateFormsData.cities
  // console.log(populateFormsData.cities);
  let cityOptions = () => {
    if (populateFormsData.cities !== undefined) {
      return populateFormsData.cities.sort().map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  };

  let houseType = () => {
    if (populateFormsData.houseType !== undefined) {
      return populateFormsData.houseType.sort().map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  };

  let bedrooms = () => {
    if (populateFormsData.bedrooms !== undefined) {
      return populateFormsData.bedrooms.sort().map(item => {
        return (
          <option key={item} value={item}>
            {item} BR
          </option>
        );
      });
    }
  };

  return (
    <section id={!mobile ? "filter" : "mobile-filter"}>
      <div className={/*!mobile ?*/ "inside" /*: 'mobile-inside'*/}>
        <h4>Filter</h4>
        <label htmlFor="city" className='filter-label-name'>City</label>
        <select onChange={change} name="city" className="filters city">
          <option value="All">All</option>
          {cityOptions()}
        </select>
        <label htmlFor="houseType" className='filter-label-name'>Home Type</label>
        <select
          onChange={change}
          name="houseType"
          className="filters houseType"
        >
          <option value="All">All Homes</option>
          {houseType()}
        </select>
        <label htmlFor="bedrooms" className='filter-label-name'>Bedrooms</label>
        <select onChange={change} name="bedrooms" className="filters bedrooms">
          <option value="0BR">0+</option>
          {bedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input
            onChange={change}
            type="text"
            name="min_price"
            className="min_price"
            value={min_price}
          />
          <input
            onChange={change}
            type="text"
            name="max_price"
            className="max_price"
            value={max_price}
          />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input
            onChange={change}
            type="text"
            name="min_floor_space"
            className="min_floor_space"
            value={min_floor_space}
          />
          <input
            onChange={change}
            type="text"
            name="max_floor_space"
            className="max_floor_space"
            value={max_floor_space}
          />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="ele">
            <span>Elevators</span>
            <input
              onChange={change}
              name="elevator"
              value={elevator}
              type="checkbox"
            />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input
              onChange={change}
              name="swimming_pool"
              value={swimming_pool}
              type="checkbox"
            />
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input
              onChange={change}
              name="finished_basement"
              value={finished_basement}
              type="checkbox"
            />
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input onChange={change} name="gym" value={gym} type="checkbox" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filter;
