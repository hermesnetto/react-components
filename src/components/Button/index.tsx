import * as React from 'react';
import * as classNames from 'classnames';
import IButton from './types';

const Button: React.StatelessComponent<IButton> = (props) => {
  const size = props.size ? `pp-btn-${props.size}` : '';
  const color = props.color ? `pp-btn-${props.color}` : '';
  const icon = props.icon ? `pp-ico-${props.icon}` : '';
  const round = props.isRound ? 'pp-btn-round' : '';
  const disabled = props.disabled ? 'pp-disabled' : '';

  const btnClass = classNames(props.className, 'pp-btn', size, color, icon, round, disabled);

  const attrs: IButton = {
    ...props,
    className: btnClass,
    type: props.type || 'button',
  };

  if (props.href) {
    delete attrs.type;
  }

  delete attrs.isRound;
  delete attrs.size;
  delete attrs.color;
  delete attrs.icon;

  return props.href
    ? <a {...attrs}>{props.children}</a>
    : <button {...attrs}>{props.children}</button>;
};

export default Button;
