import React from "react";
import MainScreen from "./screens/MainScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* NOTE: TODO: CHANGE basename to "/" WHEN SWITCHING TO CUSTOM DOMAIN NAME */}
        <BrowserRouter
          basename="/"
          forceRefresh
          onUpdate={() => window.scrollTo(0, 0)}
        >
          <NavBar />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={MainScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/signup" component={SignUpScreen} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
