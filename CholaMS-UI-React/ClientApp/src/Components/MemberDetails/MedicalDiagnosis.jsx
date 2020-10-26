import React from 'react';
import { Button, Radio, FormControlLabel, TextField, MenuItem } from '@material-ui/core';

const MedicalDiagnosis = () => {
	return (
		<form>
			<div className="row">
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Package" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Package Amount" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="PED" />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Others" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Duration of Illness" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Initial Diagnosis" />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Medical Conditions Known" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Clinical Symptoms" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Diagnosis" />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<TextField
						id="standard-select-currency-native"
						select
						label="Treatment Type"
						value="ss"
						fullWidth
						onChange={() => {}}
						SelectProps={{
							native: true,
						}}
					>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
					</TextField>
				</div>

				<div className="col-md-4">
					<TextField
						id="standard-select-currency-native"
						select
						label="ICD 10 CM"
						value="ss"
						fullWidth
						onChange={() => {}}
						SelectProps={{
							native: true,
						}}
					>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
					</TextField>
				</div>

				<div className="col-md-4">
					<TextField
						id="standard-select-currency-native"
						select
						fullWidth
						label="CPT"
						value="ss"
						onChange={() => {}}
						SelectProps={{
							native: true,
						}}
					>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
					</TextField>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<TextField
						id="standard-select-currency-native"
						select
						label="PCS"
						value="ss"
						fullWidth
						onChange={() => {}}
						SelectProps={{
							native: true,
						}}
					>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
						<option>test</option>
					</TextField>
				</div>

				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Line of Treatmen" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Remarks" />
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Etiology" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="GPLA" />
				</div>
				<div className="col-md-4">
					<TextField id="standard-basic" fullWidth label="Normal /LSCS" />
				</div>
			</div>

			<div class="mt-3">
				<div style={{ color: '#003F88', fontSize: '14px', fontWeight: 'bold', marginBottom: '20px' }}>
					Treating Doctor Consultant Details
				</div>
				diagnose grid goes
			</div>
		</form>
	);
};

export default MedicalDiagnosis;
