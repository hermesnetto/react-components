import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Select from '../index';
import { ESelectSize, IOption } from '../types';

describe('Select', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select options={[]} />, div);
  });

  it('Componente com classe xs', () => {
    const select = enzyme.shallow(<Select selectSize={ESelectSize.Xs} options={[]} />);
    expect(select.hasClass('pp-custom-select-xs')).toEqual(true);
  });

  it('Renderiza as options corretamente', () => {
    const options: IOption[] = [{
      text: 'option número 1',
      value: 'opt-1',
    }, {
      text: 'option número 2',
      value: 'opt-2',
    },];

    const select = enzyme.shallow(<Select options={options} />);
    // length
    expect(select.find('option').length).toEqual(options.length);
    // value
    expect(select.find('option').some('[value="opt-1"]')).toEqual(true);
    expect(select.find('option').some('[value="opt-2"]')).toEqual(true);
    // text
    expect(select.find('[value="opt-1"]').text()).toEqual('option número 1');
    expect(select.find('[value="opt-2"]').text()).toEqual('option número 2');
  });
});