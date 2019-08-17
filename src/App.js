import React, { useState } from "react";
import Header from "./components/Header";
import "./scss/App.scss";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listingData from "./data/listingData";

const App = () => {
  let data = listingData;
  let [filterState, setFilterState] = useState({});
  let [min_price, setmin_price] = useState(0);
  let [max_price, setmax_price] = useState(10000000);
  let [min_floor_space, setmin_floor_space] = useState(100);
  let [max_floor_space, setmax_floor_space] = useState(50000);
  let [elevator, setElevator] = useState(false);
  let [swimming_pool, setSwimming_pool] = useState(false);
  let [finished_basement, setFinished_basement] = useState(false);
  let [gym, setGym] = useState(false);
  // let globalState = ['Ridgewood', 'Ranch', '1BR', min_price, max_price, min_floor_space, max_floor_space, elevator, swimming_pool, finished_basement, gym]

  // console.log(globalState);
  const change = event => {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    console.log(name);
    setFilterState({
      ...filterState,
      [name]: value
    });
    setmin_price(name === "min_price" ? value : min_price);
    setmax_price(name === "max_price" ? value : max_price);
    setmin_floor_space(name === "min_floor_space" ? value : min_floor_space);
    setmax_floor_space(name === "max_floor_space" ? value : max_floor_space);
    setElevator(name === "elevator" ? value : elevator);
    setSwimming_pool(name === "swimming_pool" ? value : swimming_pool);
    setFinished_basement(
      name === "finished_basement" ? value : finished_basement
    );
    setGym(name === "gym" ? value : gym);
  };

  console.log(filterState);
  return (
    <div>
      <Header />
      <section id="content-area">
        <Filter
          change={change}
          min_price={min_price}
          max_price={max_price}
          min_floor_space={min_floor_space}
          max_floor_space={max_floor_space}
          elevator={elevator}
          swimming_pool={swimming_pool}
          finished_basement={finished_basement}
          gym={gym}
          // globalState={globalState}
        />
        <Listings data={data} />
      </section>
    </div>
  );
};

export default App;
