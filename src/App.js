import React, { useState } from 'react';
import Header from './components/Header';
import "./scss/App.scss";
import Filter from './components/Filter';
import Listings from './components/Listings';
// import listingData from './data/listingData';

const App = () => {
	// let [name, setName] = useState('sonu');
	// let [data, setData] = useState(listingData);

	// console.log(data);

	return (
		<div>
			<Header />
			<section id="content-area">
				<Filter />
				<Listings />
			</section>
		</div>
	);
};


export default App;
