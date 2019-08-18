import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./scss/App.scss";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listingData from "./data/listingData";

const App = () => {
  let data = listingData;
  let [filterState, setFilterState] = useState([]);
  let [min_price, setmin_price] = useState(0);
  let [max_price, setmax_price] = useState(10000000);
  let [min_floor_space, setmin_floor_space] = useState(100);
  let [max_floor_space, setmax_floor_space] = useState(50000);
  let [elevator, setElevator] = useState(false);
  let [swimming_pool, setSwimming_pool] = useState(false);
  let [finished_basement, setFinished_basement] = useState(false);
  let [gym, setGym] = useState(false);
  let [filteredData, setFilteredData] = useState(listingData)



  // console.log(globalState);
  const change = event => {
    // event.preventDefault()
    let name = event.target.name;
    let value = event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
        setFilterState(prev =>({
          ...prev,
          [name]: value,
        }))

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

  useEffect(() => {
    function filteredDataSearch() {
      console.log('running')
      const newData = data.filter(item => {
        console.log(item.price)
        return (item.price >= min_price && item.price <= max_price) && (item.floorSpace >= min_floor_space && item.floorSpace <= max_floor_space)
      })
      console.log(newData, 'newfiltered')
      setFilterState(newData)
      setFilteredData(newData)
    }
    console.log('rendered again')
    filteredDataSearch()
    },[data, min_price, max_price, min_floor_space, max_floor_space])
    //add floor space and extras

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
        <Listings data={filteredData} />
      </section>
    </div>
  );
};

export default App;
