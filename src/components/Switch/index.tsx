import * as React from 'react';
import ISwitch from './types';

const Switch: React.StatelessComponent<ISwitch> = (props) => {
  const attrs: ISwitch = {
    ...props,
  };

  return (
    <div className="pp-switch-button">
      <input {...attrs} type="checkbox" />
      <label htmlFor={attrs.id} className="pp-toggle">
        <span className="pp-toggle-handler"></span>
      </label>
    </div>
  );
};

export default Switch;