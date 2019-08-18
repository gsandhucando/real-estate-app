import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./scss/App.scss";
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import listingData from "./data/listingData";

const App = () => {
  let data = listingData;
  let [filterState, setFilterState] = useState([]);
  let [city, setCity] = useState("All");
  let [houseType, setHouseType] = useState("All");
  let [bedrooms, setBedrooms] = useState("0BR");
  let [min_price, setmin_price] = useState(0);
  let [max_price, setmax_price] = useState(10000000);
  let [min_floor_space, setmin_floor_space] = useState(100);
  let [max_floor_space, setmax_floor_space] = useState(50000);
  let [elevator, setElevator] = useState(false);
  let [swimming_pool, setSwimming_pool] = useState(false);
  let [finished_basement, setFinished_basement] = useState(false);
  let [gym, setGym] = useState(false);
  let [filteredData, setFilteredData] = useState(listingData);
  let [populateFormsData, setPopulateFormsData] = useState('');

  // console.log(globalState);
  const change = event => {
    // event.preventDefault()
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFilterState(prev => ({
      ...prev,
      [name]: value
    }));
    // console.log(name, "name!", value, "value");
    setCity(name === "city" ? value : city);
    setHouseType(name === "houseType" ? value : houseType);
    setBedrooms(name === "bedrooms" ? value : bedrooms);
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
  // console.log(filterState);

  function populateForms() {
    //city
    let cities = data.map(item => {
      return item.city
    })

    cities = new Set(cities)
    cities = [...cities]

    //homeType
    let houseType = data.map(item => {
      return item.houseType
    })

    houseType = new Set(houseType)
    houseType = [...houseType]

    //bedrooms
    let bedrooms = data.map(item => {
      return item.bedrooms
    })

    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    setPopulateFormsData({
      houseType,
      bedrooms,
      cities
    })
  }
  console.log(populateFormsData)

  useEffect(() => {
    function filteredDataSearch() {
      // console.log("running");
      let newData = data.filter(item => {
        // console.log(bedrooms)
        return (
          item.price >= min_price && item.price <= max_price && item.floorSpace >=  min_floor_space && item.floorSpace <= max_floor_space && item.bedrooms >= bedrooms
        );
      });
      // console.log(bedrooms);
      if (city !== "All") {
        newData = data.filter(item => {
          // console.log(item.city)
          return item.city === city;
        });
      }
      if (houseType !== "All") {
        newData = data.filter(item => {
          // console.log(item.houseType);
          return item.houseType === houseType;
        });
      }
      if (bedrooms !== "0BR") {
        newData = data.filter(item => {
          return item.bedrooms === bedrooms;
        });
      }
      // console.log(newData, 'newfiltered')
      // setFilterState(newData);
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
      setFilteredData(newData)
    }
    // console.log('rendered again')
    filteredDataSearch();
  }, [
    data,
    min_price,
    max_price,
    min_floor_space,
    max_floor_space,
    city,
    houseType,
    bedrooms
  ]);


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
          populateFormsAction={populateForms}
          populateFormsData={populateFormsData}
        />
        <Listings data={filteredData} />
      </section>
    </div>
  );
};

export default App;
