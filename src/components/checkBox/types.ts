export interface Props {
  label: string;
  small?: boolean;
  large?: boolean;
  supportingText?: string;
  disabled?: boolean;
  id?: string;
  onChange?: () => void;
}