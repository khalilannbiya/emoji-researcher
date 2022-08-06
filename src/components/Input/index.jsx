import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ onChange, value }) => {
   return <input className={styles.input} onChange={onChange} value={value} placeholder="Search" />;
};

Input.propTypes = {
   onChange: PropTypes.func,
   value: PropTypes.string,
};

export default Input;
