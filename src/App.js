import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  let [populateFormsData, setPopulateFormsData] = useState("");
  let [sortby, setSortby] = useState("price-dsc");
  let [view, setView] = useState("view");
  let [search, setSearch] = useState("");

  const change = event => {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //setting the state in an object by getting the prev version of state then adding the new peramiters by the name and value
    setFilterState(prev => ({
      ...prev,
      [name]: value
    }));
    // console.log(name, "name!", value, "value");
    //setting state it the name is === its name then place value otherwise use the default value
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
    setSortby(name === "sortby" ? value : sortby);
    setSearch(name === "search" ? value : search);
  };
  // console.log(filterState);

  function populateForms() {
    //function is to dynamicly populate the select option tags
    //city
    let cities = data.map(item => {
      return item.city;
    });

    //created a unique array of values so they dont repeat
    cities = new Set(cities);
    cities = [...cities];

    //homeType
    let houseType = data.map(item => {
      return item.houseType;
    });

    houseType = new Set(houseType);
    houseType = [...houseType];

    //bedrooms
    let bedrooms = data.map(item => {
      return item.bedrooms;
    });

    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];

    //placing the unique values to a state
    setPopulateFormsData({
      houseType,
      bedrooms,
      cities
    });
  }
  // console.log(populateFormsData)

  useEffect(() => {
    function filteredDataSearch() {
      // console.log("running");
      let newData = data.filter(item => {
        //filtering by price or floorspace or number of bedrooms
        return (
          item.price >= min_price &&
          item.price <= max_price &&
          item.floorSpace >= min_floor_space &&
          item.floorSpace <= max_floor_space &&
          item.bedrooms >= bedrooms
        );
      });
      //if it !== default value filter it to show the ones in that city
      if (city !== "All") {
        newData = data.filter(item => {
          // console.log(item.city)
          return item.city === city;
        });
      }
      //if it !== default value filter it to show the ones by that housetype
      if (houseType !== "All") {
        newData = data.filter(item => {
          // console.log(item.houseType);
          return item.houseType === houseType;
        });
      }
      //if it !== default value filter it to show the ones with the number of bedrooms
      if (bedrooms !== "0BR") {
        newData = data.filter(item => {
          // console.log(item.bedrooms)
          return item.bedrooms === bedrooms;
        });
      }
      // if elevator is clicked and is true we filter through data then filter through it again to see if extra is elevator then we push the items into dataList and set newData to dataList
      if (elevator === true) {
        let dataList = [];
        newData = newData.filter(item => {
          return item.extras.filter(extra => {
            // console.log(extra)
            if (extra === "elevator") {
              dataList = dataList.concat(item);
            }
          });
        });
        newData = dataList;
      }
      if (swimming_pool === true) {
        let dataList = [];
        newData = newData.filter(item => {
          return item.extras.filter(extra => {
            if (extra === "swimming pool") {
              dataList = dataList.concat(item);
            }
          });
        });
        newData = dataList;
      }
      if (finished_basement === true) {
        let dataList = [];
        newData = newData.filter(item => {
          return item.extras.filter(extra => {
            if (extra === "finished basement") {
              dataList = dataList.concat(item);
            }
          });
        });
        newData = dataList;
      }
      if (gym === true) {
        let dataList = [];
        newData = newData.filter(item => {
          return item.extras.filter(extra => {
            if (extra === "gym") {
              dataList = dataList.concat(item);
            }
          });
        });
        newData = dataList;
      }
      //on render by default we have it sorted by the price lowest to highest
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
      //for the lowest price filter uptop if its clicked it will sort it by the lowest price like our default above
      if (sortby === "price-dsc") {
        newData = newData.sort((a, b) => {
          return a.price - b.price;
        });
      }

      //for the highest price filter uptop if its clicked it will sort it by the highest price
      if (sortby === "price-asc") {
        newData = newData.sort((a, b) => {
          return b.price - a.price;
        });
      }

      //for the search bar filtering through data by city name then lowercasing the city name in data and the under input then checking if anyting matchs in the string and it returns an array of cities that match
      if (search !== "") {
        newData = newData.filter(item => {
          let city = item.city.toLowerCase();
          let searchText = search.toLowerCase();
          let n = city.match(searchText);

          if (n !== null) {
            return true;
          }
        });
      }
      //setting data according to the peramiters the user selects
      setFilteredData(newData);

      //setting data according to the peramiters the user selects
      setFilterState(newData);
    }
    //running the function in useEffect because it will change the state each time its ran
    filteredDataSearch();
    //have to add the state that is being changed constantly to an array in useEffect
  }, [
    data,
    min_price,
    max_price,
    min_floor_space,
    max_floor_space,
    city,
    houseType,
    bedrooms,
    sortby,
    search,
    elevator,
    swimming_pool,
    finished_basement,
    gym
  ]);

  function changeViewBox() {
    setView("box");
  }
  function changeViewLong() {
    setView("long");
  }

  //checking for window resize
  let [mobile, setMobile] = useState(false);

  let updateDimensions = () => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div>
      <Header updateDimensions={updateDimensions} mobile={mobile} />
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
          mobile={mobile}
        />
        <Listings
          data={filteredData}
          change={change}
          view={view}
          changeViewBox={() => changeViewBox}
          changeViewLong={() => changeViewLong}
          mobile={mobile}
        />
      </section>
      <Footer mobile={mobile} />
    </div>
  );
};

export default App;
