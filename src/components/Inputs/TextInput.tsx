import React from "react";
import { TextInput } from "@mantine/core";
import { FormElementType } from "../../content/forms";

export type TextInputProps = {
  formHook: any;
} & FormElementType;

const TextInputWrapper = ({
  elementName,
  isRequired,
  label,
  placeholder,
  elementType,
  errorMessage,
  formHook,
}: TextInputProps) => {
  return (
    <TextInput
      required={isRequired}
      label={label ? label : elementName}
      placeholder={placeholder ? placeholder : `Enter your ${elementName}`}
      value={formHook.values ? formHook.values[elementType] : ""}
      onChange={(event) => {
        if (formHook.values) {
          formHook.setFieldValue(elementType, event.currentTarget.value);
        }
      }}
      error={formHook.errors && errorMessage}
      radius="md"
    />
  );
};

export default TextInputWrapper;
