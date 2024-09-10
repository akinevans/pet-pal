import "./Button.css";

export default function Button(props) {
  return (
    <button className={`${props.styling} button`} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
