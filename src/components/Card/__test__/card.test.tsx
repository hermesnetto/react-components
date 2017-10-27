import '../../../setupTests';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Card from '../index';
import cardAttrs from '../../../cardAttrs';
import { minutesBetweenDates, daysBetweenDates } from '../../../utils/date';

describe('Card', () => {
  it('Renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card {...cardAttrs} />, div);
  });

  it('Renderiza badge de tarefa atrasada', () => {
    const attrs = {
      ...cardAttrs,
      isLate: true,
    }
    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-badges-warning').text()).toEqual('LATE');
  });

  it('Espera que o card tenha 3 pais', () => {
    const attrs = {
      ...cardAttrs,
      parents: ['a', 'b', 'c'],
    };

    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-parent-card-title li').length).toEqual(3);
  });

  it('Espera que tenha label "user story"', () => {
    const attrs = {
      ...cardAttrs,
    };

    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-tooltip').some('[data-title="User Story"]')).toEqual(true);
  });

  it('Espera que tenha +3 assigness', () => {
    const attrs = {
      ...cardAttrs,
      assignees: {
        ...cardAttrs.assignees,
        more: 3,
      },
    };

    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-more').text()).toEqual('+3');
  });

  it('Espera que não tenha assigness', () => {
    const attrs = {
      ...cardAttrs,
    };

    delete attrs.assignees;

    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-card-users').exists()).toEqual(false);
  });

  it('Não exibe a imagem do card', () => {
    const attrs = {
      ...cardAttrs,
    };

    delete attrs.picture;

    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-card-subtitles span img').exists()).toEqual(false);
  });

  it('Exibe apenas stats do pipe', () => {
    const attrs = {
      ...cardAttrs,
    };

    delete attrs.stats.phase;
    delete attrs.stats.updated;

    const now = new Date();
    const minutes = minutesBetweenDates(attrs.stats.pipe, now);
    const days = daysBetweenDates(attrs.stats.pipe, now);
    const dayOrDays = days > 1 ? 'dias' : 'dia';

    const expected = (
      <span className="pp-tooltip-top" data-title={`${days} ${dayOrDays} neste Pipe`}>
        <i className="pp-color-warning pp-ico-time"></i>
        <span>{minutes}min</span>
      </span>
    );
    
    const card = enzyme.shallow(<Card {...attrs} />);
    expect(card.find('.pp-footer-stats .pp-tooltip-top').length).toEqual(1);
    expect(card.find('.pp-footer-stats .pp-tooltip-top').contains(expected)).toEqual(true);
  });
});