import React from "react";
import { ErrorMessageText } from "./styles";
import Rating from "@material-ui/lab/Rating";
import { Field, ErrorMessage } from "formik";

const RatingField = () => (
  <div>
    <h4>Rating: </h4>
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
    <ErrorMessage name="rating" component={ErrorMessageText}></ErrorMessage>
  </div>
);

export default RatingField;
