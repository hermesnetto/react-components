import * as React from 'react';
import * as classNames from 'classnames';
import ISelect, { IOption } from './types';

const Select: React.StatelessComponent<ISelect> = (props) => {
  let type: string = 'pp-custom-select';
  if (props.isButton) {
    type = 'pp-custom-select-btn';
  } else if (props.selectSize) {
    type = `pp-custom-select-${props.selectSize}`;
  }
  const selectClass = classNames(props.className, type);

  const attrs: ISelect = {
    ...props,
    options: props.options || [],
  };

  const options = attrs.options.map((opt: IOption, i: number) => (
    <option key={i} value={opt.value}>{opt.text}</option>
  ));

  delete attrs.options;

  return (
    <div className={selectClass}>
      <select className="pp-select" {...attrs}>
        {options}
      </select>
    </div>
  );
};

export default Select;