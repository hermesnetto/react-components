import * as React from 'react';
import * as classNames from 'classnames';
import ITextInput from './types';

const Input: React.StatelessComponent<ITextInput> = (props) => {
  // add in wrap
  const size = props.inputSize ? `pp-input-${props.inputSize}` : '';
  const error = props.hasError ? 'pp-error' : '';
  const wrapClass = classNames('pp-input-wrap', size, error);

  // add in input
  const inputClass = classNames(props.className, 'pp-input');

  const attrs: ITextInput = {
    ...props,
    type: props.type || 'text',
    className: inputClass,
  };

  const help = props.hasError
    ? <span className="pp-ico-info"></span>
    : null;

  const label = props.label
    ? <b className="pp-label-text">{props.label} {help}</b>
    : null;
  
  const description = props.description
    ? <div className="markdown"><p>{props.description}</p></div>
    : null;

  const errorMessage = props.hasError && props.errorMessage
    ? <span className="pp-help-message">{props.errorMessage}</span>
    : null;

  delete attrs.label;
  delete attrs.description;
  delete attrs.inputSize;
  delete attrs.hasError;

  return (
    <label className={wrapClass}>
      {label}
      {description}
      {/* tabindex="0" */}
      <input {...attrs} />
      {errorMessage}
    </label>
  );
};

export default Input;