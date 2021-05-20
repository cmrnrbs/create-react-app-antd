import React, { useEffect } from "react";

import "./App.less";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectPhoto from "./pages/SelectPhoto";
import CheckOut from "./pages/CheckOut";
import OnBoarding from "./pages/OnBoarding";
import strings from "./helpers/Localization";
import { useCookies } from "react-cookie";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["pinframes-user"]);
  const userLang = navigator.language || navigator.userLanguage;
  useEffect(() => {
    var lang = userLang.split("-")[0];
    strings.setLanguage(lang);
  }, [userLang]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/onboarding">
            <OnBoarding />
          </Route>
          <Route path="/selectphoto">
            <SelectPhoto />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <BlogDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
