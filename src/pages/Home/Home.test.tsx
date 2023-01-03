import React from "react";

import { render, screen } from "src/customRender";
import { Home } from "./Home";

test("render Home component correctly.", () => {
  render(<Home />);
  expect(screen.getByText(/Hello, React-TS!/)).toBeInTheDocument();
  expect(screen.getByText(/UserId: 1/)).toBeInTheDocument();
});
