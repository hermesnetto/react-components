export enum ETextInputSize {
  Xs = 'xs',
  Sm = 'sm',
  Lg = 'lg',
}

export default interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  inputSize?: ETextInputSize;
  hasError?: boolean;
  errorMessage?: string;
}