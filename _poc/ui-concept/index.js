import './style';
import './assets/dicefont/dicefont';

import { Component } from 'preact';

import Canvas from './components/Canvas';
import DicePanel from './components/DicePanel';
import Drawer from './components/Drawer';

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
        <DicePanel />
			</div>
		);
	}
}
