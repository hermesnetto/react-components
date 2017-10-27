import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Checkbox from '../index';

describe('Checkbox', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox label="Um label" />, div);
  });

  it('Checkbox checado', () => {
    const checkbox = enzyme.shallow(<Checkbox label="Um Label" checked />);
    expect(checkbox.find('input').prop('checked')).toEqual(true);
  });

  it('Checkbox não checado', () => {
    const checkbox = enzyme.shallow(<Checkbox label="Um Label" checked={false} />);
    expect(checkbox.find('input').prop('checked')).toEqual(false);
  });

  it('Checkbox desabilitado', () => {
    const checkbox = enzyme.shallow(<Checkbox label="Um Label" disabled />);
    expect(checkbox.find('input').prop('disabled')).toEqual(true);
  });

  it('Renderiza a label corretamente', () => {
    const label = "Um label correto";
    const checkbox = enzyme.shallow(<Checkbox label={label} />);
    expect(checkbox.find('label').text()).toEqual(label);
  });
});