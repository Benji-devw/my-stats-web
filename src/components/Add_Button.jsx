import styles_button from "@styles/button.module.css";

const Add_Button = ({ children, ...props }) => (
  <button className={`${styles_button.add_button}`} {...props}>
    {children}
  </button>
);

export default Add_Button;
