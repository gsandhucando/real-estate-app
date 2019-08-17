import React, { useState} from 'react';
import Header from './components/Header';
import "./scss/App.scss";
import Filter from './components/Filter';
import Listings from './components/Listings';
import listingData from './data/listingData';

const App = () => {
  let data = listingData;
  let [filterState, setFilterState] = useState([])

  console.log(data);
  const change = (event) => {
    event.preventDefault()
    let name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFilterState({[name]: value})
    // console.log(event.target.name, event.target.value)
  }
console.log(filterState)
	return (
		<div>
			<Header />
			<section id="content-area">
				<Filter change={change}/>
				<Listings data={data}/>
			</section>
		</div>
	);
};


export default App;
