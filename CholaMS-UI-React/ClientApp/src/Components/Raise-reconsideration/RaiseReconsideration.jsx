import React from 'react';
import Topheader from '../../shared/Topheader';
import { Button, TextField } from '@material-ui/core';

const RaiseReconsideration = () => {
	return (
		<div>
			<Topheader title={'Reconsideration'} />
			<form>
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<TextField
							id="standard-multiline-static"
							label="Remarks*"
							fullWidth
							color="secondary"
							multiline
							rows={4}
						/>
						<div className="invalid-feedback">
							<div>Provider Remarks is Required</div>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-md-12 col-sm-6">
						<div className="input-above-txt">
							Upload Attachment - Use Browse option to add multiple attachments
						</div>
						<input
							type="file"
							formControlName="enhancementUploadFile"
							placeholder="Choose file"
							onClick={() => {}}
						/>
					</div>
					<div>
						<div>
							<div>
								{' '}
								<label>
									item2.fileName <input type="button" value="X" onClick={() => {}} />
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5 text-center">
					<Button variant="contained" color="primary">
						Submit
					</Button>
					<Button className="ml-2" variant="contained" color="secondary">
						Cancel
					</Button>
				</div>
			</form>
		</div>
	);
};

export default RaiseReconsideration;
