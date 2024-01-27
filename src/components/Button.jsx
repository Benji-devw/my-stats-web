import styles_button from "@styles/button.module.css";

const Button = ({ children, ...props }) => (
  <button className={`${styles_button.button}`} {...props}>
    {children}
  </button>
);

export default Button;
