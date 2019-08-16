import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faList,
	faTh,
	faSquare,
	faBed,
	faMapMarker
} from '@fortawesome/free-solid-svg-icons';

const list = <FontAwesomeIcon icon={faList} />;
const th = <FontAwesomeIcon icon={faTh} />;
const square = <FontAwesomeIcon icon={faSquare} />;
const bed = <FontAwesomeIcon icon={faBed} />;
const marker = <FontAwesomeIcon icon={faMapMarker} />;

const Listings = () => {
	return (
		<section id="listings">
			<section className="search-area">
				<input type="text" name="search" />
			</section>

			<section className="sortby-area">
				<div className="results">390 results found</div>
				<div className="sort-options">
					<select name="sortby" className="sortby">
						<option value="price-asc">Highest Price</option>
						<option value="price-dsc">Lowest Price</option>
					</select>
					<div className="view">
						<i className="fas fa-list">{list}</i>
						<i className="fas fa-th">{th}</i>
					</div>
				</div>
			</section>

			<section className="listings-results">
				<div className="col-md-3">
					<div className="listing">
						<div className="listing-img">
							<span className="address">1021 Keys ave</span>
							<div className="details">
								<div className="col-md-3">
									<div className="user-img"></div>
								</div>

								<div className="col-md-9">
									<div className="user-details">
										<span className="user-name">Gurjot Sandhu</span>
										<span className="post-date">09/12/2019</span>
									</div>
									<div className="listing-details">
										<div className="floor-space">
											<i className="fas fa-square">{square}</i>
											<span>1000 ft&sup2;</span>
										</div>
										<div className="bedrooms">
											<i className="fas fa-bed">{bed}</i>
											<span>3 bedrooms</span>
										</div>
									</div>

									<div className="view-btn">View Listing</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="price">$1000 / month </span>
							<span className="location">
								<i className="fas fa-map-marker-alt">{marker}</i>
								Ridgewood, NY
							</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="listing">
						<div className="listing-img">
							<span className="address">1021 Keys ave</span>
							<div className="details">
								<div className="col-md-3">
									<div className="user-img"></div>
								</div>

								<div className="col-md-9">
									<div className="user-details">
										<span className="user-name">Gurjot Sandhu</span>
										<span className="post-date">09/12/2019</span>
									</div>
									<div className="listing-details">
										<div className="floor-space">
											<i className="fas fa-square">{square}</i>
											<span>1000 ft&sup2;</span>
										</div>
										<div className="bedrooms">
											<i className="fas fa-bed">{bed}</i>
											<span>3 bedrooms</span>
										</div>
									</div>

									<div className="view-btn">View Listing</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="price">$1000 / month </span>
							<span className="location">
								<i className="fas fa-map-marker-alt">{marker}</i>
								Ridgewood, NY
							</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="listing">
						<div className="listing-img">
							<span className="address">1021 Keys ave</span>
							<div className="details">
								<div className="col-md-3">
									<div className="user-img"></div>
								</div>

								<div className="col-md-9">
									<div className="user-details">
										<span className="user-name">Gurjot Sandhu</span>
										<span className="post-date">09/12/2019</span>
									</div>
									<div className="listing-details">
										<div className="floor-space">
											<i className="fas fa-square">{square}</i>
											<span>1000 ft&sup2;</span>
										</div>
										<div className="bedrooms">
											<i className="fas fa-bed">{bed}</i>
											<span>3 bedrooms</span>
										</div>
									</div>

									<div className="view-btn">View Listing</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="price">$1000 / month </span>
							<span className="location">
								<i className="fas fa-map-marker-alt">{marker}</i>
								Ridgewood, NY
							</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="listing">
						<div className="listing-img">
							<span className="address">1021 Keys ave</span>
							<div className="details">
								<div className="col-md-3">
									<div className="user-img"></div>
								</div>

								<div className="col-md-9">
									<div className="user-details">
										<span className="user-name">Gurjot Sandhu</span>
										<span className="post-date">09/12/2019</span>
									</div>
									<div className="listing-details">
										<div className="floor-space">
											<i className="fas fa-square">{square}</i>
											<span>1000 ft&sup2;</span>
										</div>
										<div className="bedrooms">
											<i className="fas fa-bed">{bed}</i>
											<span>3 bedrooms</span>
										</div>
									</div>

									<div className="view-btn">View Listing</div>
								</div>
							</div>
						</div>
						<div className="bottom-info">
							<span className="price">$1000 / month </span>
							<span className="location">
								<i className="fas fa-map-marker-alt">{marker}</i>
								Ridgewood, NY
							</span>
						</div>
					</div>
				</div>
			</section>
			<section id="pagination">
				<ul className="pages">
					<li>Prev</li>
					<li className="active">1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>Next</li>
				</ul>
			</section>
		</section>
	);
};

export default Listings;
