import React from "react";
import { Field } from "formik";

const Option = ({ type, name, label, value }) => (
  <div className={type}>
    <label>
      <Field type={type} name={name} value={value} />
      {label}
    </label>
  </div>
);

export default Option;
