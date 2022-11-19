export function Button(props: any): JSX.Element {
  return (
    <button className="button-fold"
      onClick={() => props.executor}>
      {props.text}
    </button>
  );
  
}