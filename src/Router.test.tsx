import React from "react";
import { render, screen, act } from "src/customRender";
import userEvent from "@testing-library/user-event";

import Router from "./Router";

test("render Router component correctly.", async () => {
  render(<Router />);
  expectNavInTheDocument();
  expect(screen.getByTestId("location-check")).toHaveValue("/");
});

test("navigate to page: 나의 요금제", async () => {
  render(<Router />);
  await act(async () => {
    await userEvent.click(screen.getByText("나의 요금제"));
  });
  expectNavInTheDocument();
  expect(screen.getByTestId("location-check")).toHaveValue(
    "/mySubscriptionPlan"
  );
});

function expectNavInTheDocument(): void {
  expect(screen.getByText(/^Home$/)).toBeInTheDocument();
  expect(screen.getByText(/^나의 요금제$/)).toBeInTheDocument();
}
