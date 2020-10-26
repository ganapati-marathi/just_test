import React, { useState } from 'react';
import { Button, Radio, FormControlLabel, TextField } from '@material-ui/core';

const IntiatePreAuth = () => {
	const [ select, setSelect ] = useState('retail');

	const handleChange = (evt) => {
		setSelect(evt.target.value);
	};

	return (
		<div>
			<div className="page-header-txt">Initiate Pre-auth </div>
			<form>
				<div className="text-center justify-content-md-center">
					<div className="row mt-3">
						<div className="col-lg-2 col-md-6 text-center align-self-center ">
							<FormControlLabel
								value="start"
								control={
									<Radio
										checked={select === 'retail'}
										color="secondary"
										onChange={handleChange}
										value="retail"
										name="radio-button-demo"
										inputProps={{ 'aria-label': 'A' }}
									/>
								}
								label="Retail"
								labelPlacement="end"
							/>
						</div>
						<div className="col-lg-2 col-md-6 text-center align-self-center">
							<FormControlLabel
								value="start"
								control={
									<Radio
										checked={select === 'corp'}
										color="secondary"
										onChange={handleChange}
										value="corp"
										name="radio-button-demo"
										inputProps={{ 'aria-label': 'A' }}
									/>
								}
								label="Corporate"
								labelPlacement="end"
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div class="col-md-3 col-sm-6">
						<TextField id="standard-basic" label="Policy Number*" />
					</div>
					<div class="col-md-3 col-sm-6">
						<TextField id="standard-basic" label="Certificate Number*" />
					</div>
					<div class="col-md-3 col-sm-6">
						<TextField id="standard-basic" label="Member ID*" />
					</div>
					{select === 'corp' && (
						<div class="col-md-3 col-sm-6">
							<TextField id="standard-basic" label="Emp ID*" />
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default IntiatePreAuth;
