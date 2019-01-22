
import React, { Fragment }  from "react";

class StorePicker extends React.Component {


	render() {
		return (
			<Fragment>
			<form className='store-selector'> I am the Store Picker Component
				{/* I am a comment */}

				<h2> Please Enter a Store </h2>
				<input type='text' required placeholder='Store Name' />
				<button type='submit'>Visit Store</button>
			</form>
			</Fragment>
		)
	}
}

export default StorePicker