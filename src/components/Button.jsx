// import "@styles/button.module.css";

const Button = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);

export default Button;
