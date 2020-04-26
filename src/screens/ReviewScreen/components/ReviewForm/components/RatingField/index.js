import React from "react";
import { ErrorMessageText, FieldContainer } from "./styles";
import Rating from "@material-ui/lab/Rating";
import { Field, ErrorMessage } from "formik";

const RatingField = () => (
  <div>
    <h4>How much did you enjoy talking to this person?</h4>
    <FieldContainer>
      <Field name="rating">
        {({ field: { value }, form: { setFieldValue } }) => (
          <Rating
            name="rating"
            value={value}
            onChange={(_event, newValue) => {
              setFieldValue("rating", newValue, true);
            }}
          />
        )}
      </Field>
    </FieldContainer>
    <ErrorMessage name="rating" component={ErrorMessageText}></ErrorMessage>
  </div>
);

export default RatingField;
