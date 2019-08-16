import React from 'react';

const Filter = () => {
	return (
		<section id="filter">
			<div className="inside">
				<h4>Filter</h4>
				<select name="neighbourhood" className="filters neighbourhood">
					<option>Ridgewood</option>
				</select>
				<select name="housetype" className="filters housetype">
					<option>Ranch</option>
				</select>
				<select name="bedrooms" className="filters bedrooms">
					<option>2 BR</option>
				</select>
				<div className="filters price">
					<span className="title">Price</span>
					<input type="text" name="min-price" className="min-price" />
					<input type="text" name="max-price" className="max-price" />
				</div>
				<div className="filters floor-space">
					<span className="title">Floor Space</span>
					<input
						type="text"
						name="min-floor-space"
						className="min-floor-space"
					/>
					<input
						type="text"
						name="max-floor-space"
						className="max-floor-space"
					/>
				</div>
				<div className="filters extras">
					<span className="title">Extras</span>
					<label className="extras">
						<span>Elevators</span>
						<input name="extras" value="elevator" type="checkbox" />
					</label>
					<label className="extras">
						<span>Swimming Pool</span>
						<input name="extras" value="swimming-pool" type="checkbox" />
					</label>
					<label className="extras">
						<span>Finished Basement</span>
						<input name="extras" value="finished-basement" type="checkbox" />
					</label>
					<label className="extras">
						<span>Gym</span>
						<input name="extras" value="gym" type="checkbox" />
					</label>
				</div>
			</div>
		</section>
	);
};

export default Filter;