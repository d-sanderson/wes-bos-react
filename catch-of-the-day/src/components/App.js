import React, {Fragment, Component} from 'react'
import Header from '../components/Header'
import Inventory from '../components/Inventory'
import Order from '../components/Order'

class App extends Component {

	render() {
		return (<Fragment>
				<div className="catch-of-the-day">

					<div className="menu">

						<Header tagline="Fresh Seafood Market"/>
						<Order />
						<Inventory/>


					</div>

				</div>

			</Fragment>
		)
	}

}

export default App