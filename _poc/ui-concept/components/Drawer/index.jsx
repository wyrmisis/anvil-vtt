import './style';
import cx from 'classnames';
import ls from 'linkstate';
import { Component } from 'preact';

export default class Drawer extends Component {
  state = {
    isOpen: false
  }

  render({ children, position, ...props }, { isOpen }) {
    return (
      <div class={cx('drawer', `drawer--${position || 'left'}`, isOpen && 'drawer--open')}>
        <div class="drawer__body">{children}</div>
        <DrawerToggleButton onClick={ls(this, 'isOpen')} isOpen={isOpen} />
      </div>
    );
  }
}

const DrawerToggleButton = ({onClick, isOpen, buttonName}) => (
  <button class="drawer__toggle" value={!isOpen} onClick={onClick}>
    {buttonName || 'Toggle'}
  </button>
)
