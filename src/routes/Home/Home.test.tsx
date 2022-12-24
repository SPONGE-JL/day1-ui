import React from "react";
import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

test("render Home component correctly.", () => {
  render(<Home />);
  expect(screen.getByText(/Hello, React-TS!/)).toBeInTheDocument();
});
