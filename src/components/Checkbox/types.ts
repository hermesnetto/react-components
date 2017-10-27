export default interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tabindex?: number;
}