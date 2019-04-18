import './style';
import { Component } from 'preact';

import Canvas from './components/Canvas/Canvas.component';
// import DicePanel from './components/DicePanel.component';
import Drawer from './components/Drawer/Drawer.component';

export default class App extends Component {
	render() {
		return (
			<div class="anvil-app">
				<Canvas />
        <Drawer position="left">
          Left Drawer
        </Drawer>
        <Drawer position="right">
          Right Drawer
        </Drawer>
			</div>
		);
	}
}
