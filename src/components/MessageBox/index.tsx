import React from "react";
import { Container, Group, Title, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  message: {
    backgroundColor: theme.colors.indigo[2],
    border: `1px solid ${theme.colors.indigo[8]}`,
    borderRadius: "5px",
  },

  icon: {
    color: theme.colors.red[theme.colorScheme === "dark" ? 7 : 6],
  },
}));

const MessageBox = ({ title, text }: { title?: string; text?: string }) => {
  const { classes } = useStyles();

  return (
    <Group>
      <Container className={classes.message} p="lg">
        <Title order={5}>{title}</Title>
        <Text>{text}</Text>
      </Container>
    </Group>
  );
};

export default MessageBox;
