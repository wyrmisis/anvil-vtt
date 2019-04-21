import { h } from 'preact'

import cx from 'classnames'
import './style'

import DicePanel from 'components/dicePanel'
import Drawer from 'components/drawer'
import FabricView from 'components/fabricView'

const Game = ({ gameId, compId }) =>
  <div class={cx('game', `game-${gameId}`)}>
    <FabricView composition={compId} />
    <Drawer position='right'>Right Panel</Drawer>
    <DicePanel />
  </div>

export default Game
