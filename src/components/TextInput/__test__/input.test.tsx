import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Input from '../index';
import { ETextInputSize } from '../types';

describe('Button', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  it('Componente em estado de erro', () => {
    const message = "Mensagem de erro";
    const input = enzyme.shallow(<Input hasError={true} errorMessage={message} />);
    expect(input.find('.pp-help-message').text()).toEqual(message);
    expect(input.hasClass('pp-error')).toEqual(true);
  });

  it('Componente tem classe pp-input-xs', () => {
    const input = enzyme.shallow(<Input inputSize={ETextInputSize.Xs} />);
    expect(input.find('.pp-input-wrap').hasClass('pp-input-xs')).toEqual(true);
  });

  it('Componente não tem classe pp-input-sm', () => {
    const input = enzyme.shallow(<Input inputSize={ETextInputSize.Sm} />);
    expect(input.find('.pp-input-wrap').hasClass('pp-input-xs')).toEqual(false);
  });

  it('Componente tem classe pp-input-lg', () => {
    const input = enzyme.shallow(<Input inputSize={ETextInputSize.Lg} />);
    expect(input.find('.pp-input-wrap').hasClass('pp-input-lg')).toEqual(true);
  });
});