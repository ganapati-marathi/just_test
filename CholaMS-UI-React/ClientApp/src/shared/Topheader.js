import React from 'react';

const Topheader = ({ title, claimno }) => {
	return (
		<div className="row">
			<div className="col-lg-12 page-hdr-txt2">
				<b>{title}</b>
				<b>Claim No: </b>
				{claimno}
				<b>Claim status: </b>pending
				<b>Patient name: </b>sindhu
				<b>DOA:</b> 1223
			</div>s
		</div>
	);
};

export default Topheader;
