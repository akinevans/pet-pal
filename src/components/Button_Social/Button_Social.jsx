import { PropTypes } from "prop-types";
import "./Button_Social.scss";
import google_icon from "../../assets/icons/google-icon.svg";

//TODO: Sign in with google or email only
//TODO: Style disabled state

export default function Button_Social(props) {
  return (
    <button
      className='social-btn'
      type={props.type || "button"}
      onClick={props.onClick}
    >
      <img
        className={`social-btn-icon ${!props.icon ? "hidden" : ""}`}
        src={props.icon === "google" ? google_icon : null}
        alt={props.alt}
      />
      {props.text}
    </button>
  );
}

Button_Social.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
};
