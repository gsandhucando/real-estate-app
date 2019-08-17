import React from "react";

const Filter = ({
  change,
  min_price,
  max_price,
  min_floor_space,
  max_floor_space,
  elevator,
  swimming_pool,
  finished_basement,
  gym
}) => {
  return (
    <section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select
          onChange={change}
          name="neighbourhood"
          className="filters neighbourhood"
        >
          <option value="Ridgewood">Ridgewood</option>
          <option value="Miami">Miami</option>
        </select>
        <select
          onChange={change}
          name="housetype"
          className="filters housetype"
        >
          <option>Ranch</option>
          <option>House</option>
          <option>Apartment</option>
        </select>
        <select onChange={change} name="bedrooms" className="filters bedrooms">
          <option>1 BR</option>
          <option>2 BR</option>
          <option>3 BR</option>
          <option>4 BR</option>
          <option>5 BR</option>
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
