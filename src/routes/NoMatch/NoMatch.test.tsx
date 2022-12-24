import React from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NoMatch } from "./NoMatch";

const basePath = "/";
function NoMatchWithRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoMatch homePath={basePath} />} />
      </Routes>
      <LocationDisplay />
    </BrowserRouter>
  );
}

function LocationDisplay(): JSX.Element {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

test("render NoMatch component correctly.", async () => {
  render(<NoMatchWithRouter />);
  expect(screen.getByText(/Oops!/)).toBeInTheDocument();
  expect(screen.getByText(/Nothing to see here.. 💧/)).toBeInTheDocument();
  expect(screen.getByText(/Go to the home page/)).toBeInTheDocument();
});

test("navigate to home when click the link.", async () => {
  window.history.pushState({}, "", "/no-exist-path");
  render(<NoMatchWithRouter />);
  expect(screen.getByTestId("location-display")).toHaveTextContent(
    "/no-exist-path"
  );
  await act(async () => {
    await userEvent.click(screen.getByText("Go to the home page"));
  });
  expect(screen.getByTestId("location-display")).toHaveTextContent(basePath);
});
