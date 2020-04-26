import React from "react";
import { ErrorMessageText, FieldContainer, Container } from "./styles";
import { Field, ErrorMessage } from "formik";

const BooleanField = () => (
  <Container className="radio">
    <h4>Did this person attend the call?</h4>
    <ErrorMessage name="showedUp" component={ErrorMessageText}></ErrorMessage>
    <FieldContainer>
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
    </FieldContainer>
  </Container>
);

export default BooleanField;
