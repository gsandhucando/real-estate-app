import React from 'react';

const Filter = ({change}) => {
	return (
		<section id="filter">
			<div className="inside">
				<h4>Filter</h4>
				<select onChange={change} name="neighbourhood" className="filters neighbourhood">
					<option value='Ridgewood'>Ridgewood</option>
					<option value='Miami'>Miami</option>
				</select>
				<select onChange={change} name="housetype" className="filters housetype">
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
					<input onChange={change} type="text" name="min-price" className="min-price" />
					<input onChange={change} type="text" name="max-price" className="max-price" />
				</div>
				<div className="filters floor-space">
					<span className="title">Floor Space</span>
					<input
          onChange={change}
						type="text"
						name="min-floor-space"
						className="min-floor-space"
					/>
					<input
          onChange={change}
						type="text"
						name="max-floor-space"
						className="max-floor-space"
					/>
				</div>
				<div className="filters extras">
					<span className="title">Extras</span>
					<label htmlFor="extras">
						<span>Elevators</span>
						<input onChange={change} name="extras" value="elevator" type="checkbox" />
					</label>
					<label htmlFor="extras">
						<span>Swimming Pool</span>
						<input onChange={change} name="extras" value="swimming-pool" type="checkbox" />
					</label>
					<label htmlFor="extras">
						<span>Finished Basement</span>
						<input onChange={change} name="extras" value="finished-basement" type="checkbox" />
					</label>
					<label htmlFor="extras">
						<span>Gym</span>
						<input onChange={change} name="extras" value="gym" type="checkbox" />
					</label>
				</div>
			</div>
		</section>
	);
};

export default Filter;