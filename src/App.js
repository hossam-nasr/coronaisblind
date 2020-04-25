import React from "react";
import MainScreen from "./screens/MainScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ReviewScreen from "./screens/ReviewScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import { UserProvider } from "./Auth";
import RootContainer from "./components/RootContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter
          basename="/"
          forceRefresh
          onUpdate={() => window.scrollTo(0, 0)}
        >
          <RootContainer>
            <NavBar />
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={MainScreen} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/signup" component={SignUpScreen} />
                <Route
                  exact
                  path="/review?callId=:callId"
                  component={ReviewScreen}
                />
              </Switch>
            </ScrollToTop>
          </RootContainer>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
