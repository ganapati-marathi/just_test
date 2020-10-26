import React, { useState } from 'react';
import { Button, Radio, FormControlLabel } from '@material-ui/core';
import Topheader from '../../shared/Topheader';

const Raisesettelement = ({ match }) => {
	// TODO: add property to save the file

	const claimno = match.params.claimno;

	const [ data, setData ] = useState([
		{
			name: 'Discharge summary',
			selectedValue: 'No',
		},
		{
			name: 'Final hospital bill',
			selectedValue: 'No',
		},
		{
			name: 'Payment receipt',
			selectedValue: 'No',
		},
		{
			name: 'Discharge summary',
			selectedValue: 'No',
		},
		{
			name: 'Discharge summary',
			selectedValue: 'No',
		},
	]);

	const handleChange = (index) => (event) => {
		let tempdata = [ ...data ];
		tempdata[index] = { ...tempdata[index], selectedValue: event.target.value };
		setData(tempdata);
	};

	const Dummydata = () => {
		return data.map((documentName, index) => (
			<div className="row mt-3" key={index}>
				<div className="col-lg-3 col-md-6">{documentName.name}</div>
				<div className="text-center">
					<FormControlLabel
						value="start"
						control={
							<Radio
								checked={documentName.selectedValue === 'Yes'}
								color="secondary"
								onChange={handleChange(index)}
								value="Yes"
								name="radio-button-demo"
								inputProps={{ 'aria-label': 'A' }}
							/>
						}
						label="Yes"
						labelPlacement="end"
					/>
					<FormControlLabel
						value="start"
						control={
							<Radio
								checked={documentName.selectedValue === 'No'}
								color="secondary"
								onChange={handleChange(index)}
								value="No"
								name="radio-button-demo"
								inputProps={{ 'aria-label': 'A' }}
							/>
						}
						label="No"
						labelPlacement="end"
					/>
					{documentName.selectedValue === 'Yes' && <input type="file" />}
				</div>
			</div>
		));
	};

	return (
		<div>
			<Topheader title={'Raise Settlement'} claimno={claimno} />

			<div>{Dummydata()}</div>

			<div className="mt-5 text-center">
				<Button variant="contained" color="primary">
					Submit
				</Button>
				<Button className="ml-2" variant="contained" color="secondary">
					Cancel
				</Button>
			</div>
		</div>
	);
};

export default Raisesettelement;
