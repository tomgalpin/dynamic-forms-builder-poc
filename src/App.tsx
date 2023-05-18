import React from "react";
import { MantineProvider } from "@mantine/core";
import { AppShell } from "@mantine/core";
import LeftNav from "./components/LeftNav";
import HomePage from "./components/Pages/home";
import { testForms } from "./content/forms";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Page from "./components/Pages/page";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  page: {
    width: "50%",
    padding: theme.spacing.lg,
  },
}));

function App() {
  const { classes } = useStyles();
  const routePaths = testForms.map((item) => item.stepId);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppShell
          padding="md"
          navbar={<LeftNav routePaths={["/home", ...routePaths]} />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <div className={classes.page}>
            <Routes>
              <Route
                key="home-page"
                path="/home"
                Component={() => <HomePage />}
              />
              <Route
                path="*"
                element={<Navigate to="/home" replace={true} />}
              />
              {testForms.map((item, index) => (
                <Route
                  key={index}
                  path={item.stepId}
                  Component={() => (
                    <Page
                      stepId={item.stepId}
                      title={item.title}
                      subtitle={item.subtitle}
                      form={item.form}
                    />
                  )}
                />
              ))}
            </Routes>
          </div>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}

export default App;
