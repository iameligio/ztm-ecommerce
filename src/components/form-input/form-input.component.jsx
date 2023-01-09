import React from "react";
import "./form-input.styles.jsx";
import { Group, Input, FormInputlabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputlabel shrink={otherProps.value.length}>
          {label}
        </FormInputlabel>
      )}
    </Group>
  );
};

export default FormInput;
