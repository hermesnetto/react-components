import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Button from '../index';
import { EButtonSize, EButtonColor, EButtonIcon } from '../types';

describe('Button', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('Renderiza componente com <button>', () => {
    const button = enzyme.shallow(<Button />);
    expect(button.type()).toEqual('button');
  });

  it('Renderiza componente com <a>', () => {
    const button = enzyme.shallow(<Button href="/foo" />);
    expect(button.type()).toEqual('a');
  });

  it('Contem classe de desabilitado', () => {
    const button = enzyme.shallow(<Button disabled />);
    expect(button.hasClass('pp-disabled')).toEqual(true);
  });

  it('Contem atributo disabled', () => {
    const button = enzyme.shallow(<Button disabled />);
    expect(button.prop('disabled')).toEqual(true);
  });

  it('Contem ícone de loading', () => {
    const button = enzyme.shallow(<Button icon={EButtonIcon.Loading} />);
    expect(button.hasClass('pp-ico-loading')).toEqual(true);
  });

  it('Button de tipo outline', () => {
    const button = enzyme.shallow(<Button color={EButtonColor.Outline} />);
    expect(button.hasClass('pp-btn-outline')).toEqual(true);
  });

  it('Button com size lg', () => {
    const button = enzyme.shallow(<Button size={EButtonSize.Lg} />);
    expect(button.hasClass('pp-btn-lg')).toEqual(true);
  });
});