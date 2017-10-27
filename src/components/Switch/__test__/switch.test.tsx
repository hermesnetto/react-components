import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as enzyme from 'enzyme';
import Switch from '../index';

describe('Switch', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Switch />, div);
  });
});