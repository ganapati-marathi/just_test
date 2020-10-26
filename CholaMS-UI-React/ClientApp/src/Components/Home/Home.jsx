import React from 'react';
import { TextField } from '@material-ui/core';

const Home = () => {
	return (
		<form>
			<div className="row">
				<div className="col-md-3">
					<TextField id="standard-number" label="Room and Nursing Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="ICU Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="OT charges" type="number" fullWidth />
				</div>
			</div>

			<div className="row mt-3">
				<div className="col-md-3">
					<TextField id="standard-number" label="Room and Nursing Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="ICU Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="OT charges" type="number" fullWidth />
				</div>
			</div>

			<div className="row mt-3">
				<div className="col-md-3">
					<TextField id="standard-number" label="Room and Nursing Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="ICU Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="OT charges" type="number" fullWidth />
				</div>
			</div>

			<div className="row mt-3">
				<div className="col-md-3">
					<TextField id="standard-number" label="Room and Nursing Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="ICU Charges" type="number" fullWidth />
				</div>
				<div className="col-md-3">
					<TextField id="standard-number" label="OT charges" type="number" fullWidth />
				</div>
			</div>
		</form>
	);
};

export default Home;
