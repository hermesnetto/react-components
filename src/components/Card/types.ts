export interface ILabel {
  title: string;
  color: string;
}

export interface IStats {
  pipe: Date;
  phase: Date;
  updated: Date;
}

export interface IAssignees {
  more: number;
  name: string;
  picture: string;
}

export default interface ICard {
  title: string;
  isLate?: boolean;
  isExpired?: boolean;
  fields?: string[];
  labels?: ILabel[];
  stats?: IStats;
  picture?: string;
  parents?: string[];
  assignees?: IAssignees;
  tabIndex?: number;
}