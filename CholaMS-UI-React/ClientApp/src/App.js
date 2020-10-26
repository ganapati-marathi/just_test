import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './Components/Home/Home';
import IntiatePreAuth from './Components/Intiate-pre-auth/InitiatePreAuth';
import MedicalDiagnosis from './Components/MemberDetails/MedicalDiagnosis';
import RaisEenhancementTransaction from './Components/Raise-enhancement-transaction/RaisEenhancementTransaction';
import RaiseReconsideration from './Components/Raise-reconsideration/RaiseReconsideration';
import Raisesettelement from './Components/Raise-settelement/Raise-settelement';

import './custom.css';

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/diagnose" exact component={MedicalDiagnosis} />
				<Route path="/intiate-pre-auth" exact component={IntiatePreAuth} />
				<Route path="/raise-Settelment/:claimno" exact component={Raisesettelement} />
				<Route path="/enhancement/:claimno" exact component={RaisEenhancementTransaction} />
				<Route path="/reconsideration/:claimno" exact component={RaiseReconsideration} />
			</Switch>
		);
	}
}
