import { PropTypes } from "prop-types";
import "./Button.scss";

//FIXME: button disabled functionality and disabled css rules

export default function Button(props) {
  return (
    <button
      // disabled={props.disabled}
      className={`btn ${props.variant} ${props.size}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  // disabled: PropTypes.boolean,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};
