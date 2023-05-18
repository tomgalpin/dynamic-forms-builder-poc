import React from "react";
import { Group, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormType } from "../../content/forms";

import NameInput from "../Inputs/Name";
import EmailInput from "../Inputs/Email";
import MessageBox from "../MessageBox";

const Form = ({ elements, submitAction }: FormType) => {
  // It doesn't seem that Mantine forms can async load these initial values.
  // At least not as I could figure out relatively quickly for this POC.
  const form = useForm({
    initialValues: {
      first_name: "",
      last_name: "",
      full_name: "",
      email: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    submitAction(form.values);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Stack>
        {/* This is the big, long switch statement that can drive our form builder: */}
        {elements.map((item, index) => {
          if (
            item.elementType === "first_name" ||
            item.elementType === "last_name" ||
            item.elementType === "full_name"
          ) {
            return (
              <NameInput
                key={index}
                elementName={item.elementName}
                isRequired={item.isRequired}
                label={item.label}
                placeholder={item.placeholder}
                elementType={item.elementType}
                errorMessage={item.errorMessage}
                formHook={form}
              />
            );
          }

          if (item.elementType === "email") {
            return (
              <EmailInput
                key={index}
                elementName={item.elementName}
                isRequired={item.isRequired}
                label={item.label}
                placeholder={item.placeholder}
                elementType={item.elementType}
                errorMessage={item.errorMessage}
                formHook={form}
              />
            );
          }

          if (item.elementType === "Message") {
            return (
              <MessageBox
                key={index}
                title={item.content?.title}
                text={item.content?.text}
              />
            );
          }
        })}
      </Stack>

      <Group position="apart" mt="xl">
        <Button type="submit" size="lg" radius="md">
          Submit
        </Button>
      </Group>
    </form>
  );
};

export default Form;
