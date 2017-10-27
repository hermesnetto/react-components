export enum EButtonSize {
  Sm = 'sm',
  Lg = 'lg',
}

export enum EButtonColor {
  Danger = 'danger',
  Outline = 'outline',
  Primary = 'primary',
  Gray = 'gray',
  LightGray = 'light-gray',
}

export enum EButtonIcon {
  Star = 'star',
  Collumns = 'columns',
  Formula = 'formula',
  Loading = 'loading',
}

export interface IButtonProps {
  isRound?: boolean;
  size?: EButtonSize;
  color?: EButtonColor;
  icon?: EButtonIcon;
}

type IButton = (
  IButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export default IButton;