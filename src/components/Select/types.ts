export enum ESelectSize {
  Xs = 'xs',
  Sm = 'sm',
}

export interface IOption {
  text: string;
  value: string;
}

export default interface ITextInput extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  selectSize?: ESelectSize;
  isButton?: boolean;
}