import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "routes/Home";
import MySubscriptionPlan from "routes/MySubscriptionPlan";
import NoMatch from "routes/NoMatch";

function Router(): JSX.Element {
  const basePath = "/";
  return (
    <BrowserRouter>
      <Routes>
        <Route path={basePath} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mySubscriptionPlan" element={<MySubscriptionPlan />} />
          <Route path="*" element={<NoMatch homePath={basePath} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout(): JSX.Element {
  return (
    <>
      <Navigation />
      <hr />
      <Outlet /> {/* render child route at here */}
    </>
  );
}

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mySubscriptionPlan">나의 요금제</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Router;
