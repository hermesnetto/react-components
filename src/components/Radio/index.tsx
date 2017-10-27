import * as React from 'react';
import IRadio from './types';

const Radio: React.StatelessComponent<IRadio> = (props) => {
  const radioClass = props.size ? `pp-radio-${props.size}` : 'pp-radio';

  const attrs: IRadio = {
    ...props,
  };

  delete attrs.label;
  delete attrs.tabIndex;

  return (
    <div className={radioClass}>
      <input {...attrs} type="radio" />
      <label htmlFor={props.id} tabIndex={props.tabIndex}>{props.label}</label>
    </div>
  );
};

export default Radio;