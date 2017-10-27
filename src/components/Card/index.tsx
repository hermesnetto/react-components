import * as React from 'react';
import { minutesBetweenDates, daysBetweenDates } from '../../utils/date';
import ICard from './types';

const Card: React.StatelessComponent<ICard> = (props) => {
  const getBadgeLate = (): JSX.Element | null => {
    if (props.isLate) {
      return <label className="pp-badges-warning">LATE</label>;
    }
    return null;
  };

  const getBadgeExpired = (): JSX.Element | null => {
    if (props.isExpired) {
      return <label className="pp-badges-danger">EXPIRED</label>;
    }
    return null;
  };

  const getLabels = (): JSX.Element | null => {
    if (props.labels && props.labels.length) {
      return (
        <div className="pp-card-label">
          {props.labels.map((label, index) => (
            <span key={index} className="pp-tooltip" data-title={label.title} style={{background: label.color}}>
            </span>
          ))}
        </div>
      );
    }

    return null;
  };

  const getFields = (): Array<JSX.Element> | null => {
    if (props.fields && props.fields.length) {
      return props.fields.map((field, index) => <span key={index}>{field}</span>);
    }
    
    return null;
  };

  const getPipeStats = (): JSX.Element | null => {
    if (props.stats && props.stats.pipe) {
      const now = new Date();
      const minutes = minutesBetweenDates(props.stats.pipe, now);
      const days = daysBetweenDates(props.stats.pipe, now);
      const dayOrDays = days > 1 ? 'dias' : 'dia';

      return (
        <span className="pp-tooltip-top" data-title={`${days} ${dayOrDays} neste Pipe`}>
          <i className={`pp-color-warning pp-ico-time`}></i>
          <span>{minutes}min</span>
        </span>
      );
    }

    return null;
  };

  const getPhaseStats = (): JSX.Element | null => {
    if (props.stats && props.stats.phase) {
      const now = new Date();
      const minutes = minutesBetweenDates(props.stats.phase, now);
      const days = daysBetweenDates(props.stats.phase, now);
      const dayOrDays = days > 1 ? 'dias' : 'dia';

      return (
        <span className="pp-tooltip-top" data-title={`${days} ${dayOrDays} nesta fase`}>
          <i className={`pp-color-success pp-ico-phase`}></i>
          <span>{minutes}min</span>
        </span>
      );
    }

    return null;
  };

  const getUpdatedStats = (): JSX.Element | null => {
    if (props.stats && props.stats.updated) {
      const now = new Date();
      const minutes = minutesBetweenDates(props.stats.updated, now);
      const days = daysBetweenDates(props.stats.updated, now);
      const dayOrDays = days > 1 ? 'dias' : 'dia';

      return (
        <span className="pp-tooltip-top" data-title={`Ultima atualização ${days} ${dayOrDays} atras`}>
          <i className={`pp-color-info pp-ico-refresh`}></i>
          <span>{minutes}min</span>
        </span>
      );
    }

    return null;
  };

  const getParents = (): JSX.Element | null => {
    if (props.parents && props.parents.length) {
      return (
        <div className="pp-parent-card-title">
          <ul>
            {props.parents.map((parentName, index) => (
              <li key={index}>
                <span className="pp-trigger-subtasks-sm pp-ico-bold-arrow-right"> </span>
                {parentName}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    return null;
  };

  const getAssignees = (): JSX.Element | null => {
    const { assignees } = props;

    if (assignees) {
      const { more, picture, name } = assignees;

      return (
        <div className="pp-card-users">
          <div className="pp-tooltip-left" data-title={name}>
            <img className="pp-round" src={picture} />
          </div>
          {more >= 1 ? <span className="pp-more">+{more}</span> : null}
        </div>
      );
    }

    return null;
  };

  const getPicture = (): JSX.Element | null => {
    return (props.picture)
      ? <span> <img src={props.picture} /> </span>
      : null;
  }
  
  return (
    <div className="pp-card-wrap">
      <div className="pp-card" draggable={true}>
        <div className="pp-card-header">
          <div className="pp-header-elements">
            {getLabels()}
            <div className="pp-cards-badges">
              {getBadgeLate()}
              {getBadgeExpired()}
            </div>
          </div>
        </div>
        <div className="pp-card-content">
          <span className="pp-trigger-subtasks pp-ico-bold-arrow-right"></span>
          <p tabIndex={props.tabIndex || 0}>{props.title}</p>
          <div className="pp-card-subtitles">
            {getPicture()}
            {getFields()}
            <div className="pp-card-footer">
              <div className="pp-footer-stats">
                {getPipeStats()}
                {getPhaseStats()}
                {getUpdatedStats()}
              </div>
              {getAssignees()}
            </div>
          </div>
          {getParents()}
        </div>
      </div>
    </div>
  );
}

export default Card;
