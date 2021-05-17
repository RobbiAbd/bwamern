import React, { Component } from "react";

import Header from "parts/Header";
import landingPageJson from "json/landingPage";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();

	}
	render() {
		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero}></Hero>
				<MostPicked refMostPicked={this.refMostPicked} data={landingPageJson.mostPicked}></MostPicked>
				<Categories data={landingPageJson.categories}></Categories>
			</>
		);
	}
}
