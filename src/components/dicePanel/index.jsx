import './style'
import 'assets/dicefont/dicefont'

import cx from 'classnames'
import { Component, h } from 'preact'

const dieValues = [4, 6, 8, 10, 12, 20]

const DicePanel = () => (
  <div class='dice-panel'>
    <ul class='dice-panel__options'>
      {dieValues.map(dieValue => (
        <li class='dice-panel__option'>
          <DieButton value={dieValue} />
        </li>
      ))}
    </ul>
  </div>
)

class DieButton extends Component {
  doRoll = () => {
    for (let i = 0, j = this.props.count || 1; i < j; i++) {
      console.log(Math.ceil(Math.random() * this.props.value))
    }
  }

  render ({ count = 1, value }) {
    return (
      <button class={cx('dice-panel__roll-button', `dice-panel__roll-button--${value}`, `df-d${value}-${value}`)} onClick={() => this.doRoll()}>
        Roll {count}d{value}
      </button>
    )
  }
}

export default DicePanel
