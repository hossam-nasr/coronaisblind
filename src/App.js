import React from "react";
import MainScreen from "./screens/MainScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./Nav";
import { AuthProvider } from "./Auth";
import SignUp from "./SignUp"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* NOTE: TODO: CHANGE basename to "/" WHEN SWITCHING TO CUSTOM DOMAIN NAME */}
        <BrowserRouter
          basename="/coronaisblind"
          forceRefresh
          onUpdate={() => window.scrollTo(0, 0)}
        >
          <Nav />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={MainScreen} />
              <Route exact path="/signup" component={SignUp}/>
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
