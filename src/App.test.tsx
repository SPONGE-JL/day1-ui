import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders basic source", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, React-TS!/i);
  expect(linkElement).toBeInTheDocument();
});
