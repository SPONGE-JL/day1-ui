import React from "react";
import { render, screen } from "@testing-library/react";

import MySubscriptionPlan from "./MySubscriptionPlan";

test("render MySubscriptionPlan component correctly.", () => {
  render(<MySubscriptionPlan />);
  expect(
    screen.getByText(/TODO: serve my subcription plan/)
  ).toBeInTheDocument();
});
