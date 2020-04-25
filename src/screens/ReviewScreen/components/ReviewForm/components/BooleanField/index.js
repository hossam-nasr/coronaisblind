import React from "react";
import { ErrorMessageText } from "./styles";
import { Field, ErrorMessage } from "formik";

const BooleanField = () => (
  <div className="radio">
    <h4>Did this person show up?</h4>
    <ErrorMessage name="showedUp" component={ErrorMessageText}></ErrorMessage>
    <div className="radio">
      <label>
        <Field type="radio" name="showedUp" value="true" />
        Yes
      </label>
    </div>
    <div className="radio">
      <label>
        <Field type="radio" name="showedUp" value="false" />
        No
      </label>
    </div>
  </div>
);

export default BooleanField;
