import * as React from 'react';
import ICheckbox from './types';

const Checkbox: React.StatelessComponent<ICheckbox> = (props) => {
  const checkClass = props.size ? `pp-checkbox-${props.size}` : 'pp-checkbox';

  const attrs: ICheckbox = {
    ...props,
  };

  delete attrs.label;
  delete attrs.tabIndex;

  return (
    <div className={checkClass}>
      <input {...attrs} type="checkbox" />
      <label htmlFor={props.id} tabIndex={props.tabIndex}>{props.label}</label>
    </div>
  );
};

export default Checkbox;