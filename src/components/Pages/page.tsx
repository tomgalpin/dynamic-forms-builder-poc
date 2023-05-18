import React from "react";
import { FormsType } from "../../content/forms";
import Form from "../Form";
import { Code, Title, Text } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  form: {
    width: "800px",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.gray[4]}}`,
  },

  title: {
    marginBottom: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    borderBottom: `1px solid ${theme.colors.gray[6]}}`,
  },
}));

const Page = ({ stepId, title, subtitle, form }: FormsType) => {
  const { classes } = useStyles();

  return (
    <div className={classes.form}>
      <Title order={4} className={classes.title}>
        Step: <Code>{stepId}</Code>
      </Title>
      <Title order={1}>{title}</Title>
      <Text size="md">{subtitle}</Text>
      <Form elements={form.elements} submitAction={form.submitAction} />
    </div>
  );
};

export default Page;
