import React from "react";
import MainScreen from "./screens/MainScreen";
import SignupScreen from "./screens/SignupScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/" forceRefresh onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/signup" component={SignupScreen} />
          </Switch>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
