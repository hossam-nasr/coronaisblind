import React from "react";
import MainScreen from "./screens/MainScreen";
import SignupScreen from "./screens/SignupScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* NOTE: TODO: CHANGE basename to "/" WHEN SWITCHING TO CUSTOM DOMAIN NAME */}
      <BrowserRouter
        basename="/coronaisblind"
        forceRefresh
        onUpdate={() => window.scrollTo(0, 0)}
      >
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/signup" component={SignupScreen} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
