import PropTypes from "prop-types";

function Button({ children, version, btnType }) {
  return (
    <button type={btnType} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  btnType: "submit",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
