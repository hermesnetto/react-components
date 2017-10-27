import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Radio from '../index';

describe('Radio', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Radio label="Um label" />, div);
  });

  it('Radio checado', () => {
    const radio = enzyme.shallow(<Radio label="Um Label" checked />);
    expect(radio.find('input').prop('checked')).toEqual(true);
  });

  it('Radio não checado', () => {
    const radio = enzyme.shallow(<Radio label="Um Label" checked={false} />);
    expect(radio.find('input').prop('checked')).toEqual(false);
  });

  it('Radio desabilitado', () => {
    const radio = enzyme.shallow(<Radio label="Um Label" disabled />);
    expect(radio.find('input').prop('disabled')).toEqual(true);
  });

  it('Renderiza a label corretamente', () => {
    const label = "Um label correto";
    const radio = enzyme.shallow(<Radio label={label} />);
    expect(radio.find('label').text()).toEqual(label);
  });
});