import React from "react";
import { TextInput, createStyles } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { TextInputProps } from "./TextInput";

const useStyles = createStyles((theme) => ({
  invalid: {
    backgroundColor: theme.colors.red[0],
  },

  icon: {
    color: theme.colors.red[6],
  },
}));

const EmailInput = ({
  elementName,
  isRequired,
  label,
  placeholder,
  elementType,
  errorMessage,
  formHook,
}: TextInputProps) => {
  const { classes } = useStyles();

  return (
    <TextInput
      required={isRequired}
      classNames={{ input: classes.invalid }}
      label={label ? label : elementName}
      placeholder={placeholder ? placeholder : `Enter your ${elementName}`}
      value={formHook.values ? formHook.values[elementType] : ""}
      onChange={(event) => {
        if (formHook.values) {
          formHook.setFieldValue(
            formHook.values[elementType],
            event.currentTarget.value
          );
        }
      }}
      error={formHook.errors && errorMessage}
      rightSection={
        <IconAlertTriangle
          stroke={1.5}
          size="1.1rem"
          className={classes.icon}
        />
      }
      radius="md"
    />
  );
};

export default EmailInput;
