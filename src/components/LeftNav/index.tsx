import React from "react";
import {
  createStyles,
  Code,
  Navbar,
  Group,
  Title,
  getStylesRef,
} from "@mantine/core";
import { IconLink, IconHome } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.dark[1]}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
      color: theme.black,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color: theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

type LeftNavProps = {
  routePaths: Array<string>;
};

const LeftNav = ({ routePaths }: LeftNavProps) => {
  const { classes } = useStyles();

  const renderLinks = routePaths.map((item) => {
    let LinkIcon;

    if (item === "/home") {
      LinkIcon = <IconHome className={classes.linkIcon} />;
    } else {
      LinkIcon = <IconLink className={classes.linkIcon} />;
    }

    return (
      <div key={item}>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? `${classes.link} ${classes.linkActive}`
              : `${classes.link}`;
          }}
          to={item}
        >
          {LinkIcon}
          <Code>{item}</Code>
        </NavLink>
      </div>
    );
  });

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Title order={3}>Dynamic Forms POC</Title>
        </Group>
        {renderLinks}
      </Navbar.Section>
    </Navbar>
  );
};

export default LeftNav;
