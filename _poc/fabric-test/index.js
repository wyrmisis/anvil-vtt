import './style';
import { Component } from 'preact';

import FabricView from './FabricView.component';

export default class App extends Component {
	render() {
		return (
			<div>
        <FabricView />
			</div>
		);
	}
}

