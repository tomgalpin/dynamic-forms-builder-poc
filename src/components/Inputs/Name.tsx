import React from "react";
import TextInputWrapper, { TextInputProps } from "./TextInput";

const NameInput = ({
  elementName,
  isRequired,
  label,
  placeholder,
  elementType,
  errorMessage,
  formHook,
}: TextInputProps) => (
  <TextInputWrapper
    isRequired={isRequired}
    elementName={elementName}
    label={label ? label : elementName}
    placeholder={placeholder ? placeholder : `Enter Your ${elementName}`}
    elementType={elementType}
    errorMessage={errorMessage}
    formHook={formHook}
  />
);

export default NameInput;
