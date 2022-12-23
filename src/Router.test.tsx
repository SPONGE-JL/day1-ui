import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Router from "./Router";

function expectNavInTheDocument(): void {
  expect(screen.getByText(/Home/)).toBeInTheDocument();
  expect(screen.getByText(/나의 요금제/)).toBeInTheDocument();
}

test("render Router component correctly.", async () => {
  render(<Router />);
  expectNavInTheDocument();
  expect(screen.getByText(/Hello, React-TS!/)).toBeInTheDocument();
});

test("navigate to page: 나의 요금제", async () => {
  render(<Router />);
  await act(async () => {
    await userEvent.click(screen.getByText("나의 요금제"));
  });
  expectNavInTheDocument();
  expect(
    screen.getByText(/TODO: serve my subcription plan/)
  ).toBeInTheDocument();
});
