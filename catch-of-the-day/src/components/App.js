import React, {Fragment, Component} from 'react';
import Header from '../components/Header';
import Order from '../components/Order';
import Inventory from '../components/Inventory';
import sampleFishes from "../sample-fishes";
import Fish from './Fish';


class App extends Component {

	//methods that update state and the actual state always need to live in the actual component
	state = {
		fishes: {},
		order: {}
	};

	addFish = fish => {
		//take a copy of the existing state
		const fishes = { ...this.state.fishes }


		//add new fish to that fishes variable
		fishes[`fish${Date.now()}`] = fish

		//set the new fishes object to state
		this.setState({
			fishes: fishes
		});

	};
	loadSampleFishes = () => {
		this.setState({fishes: sampleFishes})
	}



	render() {
		return (<Fragment>
				<div className="catch-of-the-day">

					<div className="menu">

						<Header tagline="Fresh Seafood Market"/>
						<ul className="fishes">
							{Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
						</ul>
					</div>
						<Order />
						<Inventory
							addFish={this.addFish}
							loadSampleFishes={this.loadSampleFishes}
						/>


					</div>



			</Fragment>
		)
	}

}

export default App