import {ButtonProps} from "../src/Button.props"
export function Button(props: ButtonProps): JSX.Element {
  return (
    <button className="button-fold"
    onClick={(event: React.MouseEvent<HTMLElement>) => {
      props.executor()
    }}>
      {props.text}
    </button>
  );
  
}