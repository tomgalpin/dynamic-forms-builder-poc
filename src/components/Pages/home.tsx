import React from "react";
import { Group, Paper, Code, Title, Text, createStyles } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { displayStep } from "../../content/forms";

const useStyles = createStyles(() => ({
  prismContainer: {
    width: "100%",
  },

  prismEditor: {
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
}));

const HomePage = () => {
  const { classes } = useStyles();

  return (
    <Group p="xl" pb="xl" mb="md">
      <Title mb="lg">Dynamic Forms POC</Title>
      <Text mb="md">
        Let&apos;s make <Code>/product-flows</Code> a dynamic form builder that
        responds to a Headless CMS (e.g. Contentful) or the BE. This is one way
        to do it. It could be waaaay simpler, cleaner, easier to test, etc...
      </Text>
      <Text mb="lg">
        To render a form/page, a possible (and very rough) example of what we
        might receive from a Headless CMS or the BE could be something like:
      </Text>
      <Paper className={classes.prismContainer}>
        <Prism p="lg" pb="xl" language="tsx" className={classes.prismEditor}>
          {displayStep}
        </Prism>
      </Paper>
    </Group>
  );
};

export default HomePage;
