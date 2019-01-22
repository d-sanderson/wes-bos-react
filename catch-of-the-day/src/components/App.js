import React, {Fragment} from 'react'
import Header from '../components/Header'
import StorePicker from "./StorePicker";
import Inventory from '../components/Inventory'
import Order from '../components/Order'

class App extends React.Component {

	render() {
		return (<Fragment>
				<div className="catch-of-the-day">

					<div className="menu">

						<Header tagline="David is cool" age={100}/>
						<Order/>
						<Inventory/>


					</div>

				</div>

			</Fragment>
		)
	}

}

export default App