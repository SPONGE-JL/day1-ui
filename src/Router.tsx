import React from "react";
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import Home from "routes/Home";
import MySubscriptionPlan from "routes/MySubscriptionPlan";
import NoMatch from "routes/NoMatch";

export default function Router(): JSX.Element {
  const rootPath = "/";
  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootPath} element={<Layout rootPath={rootPath} />}>
          <Route index element={<Home />} />
          <Route path="mySubscriptionPlan" element={<MySubscriptionPlan />} />
          <Route path="*" element={<NoMatch homePath={rootPath} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ rootPath }: { rootPath: string }): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Navigation rootPath={rootPath} />
      <hr />
      <Outlet />
      {/* render child route at here */}
      <input
        data-testid="location-check"
        type="hidden"
        value={location.pathname}
      />
    </>
  );
}

function Navigation({ rootPath }: { rootPath: string }): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to={rootPath}>Home</Link>
        </li>
        <li>
          <Link to={`${rootPath}mySubscriptionPlan`}>나의 요금제</Link>
        </li>
      </ul>
    </nav>
  );
}
