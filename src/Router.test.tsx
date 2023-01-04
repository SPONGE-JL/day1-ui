import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, act } from "src/customRender";
import Router from "./Router";
import * as MobilePlanList from "src/features/MobilePlanList/MobilePlanList.test";

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});

test("render Router component correctly.", () => {
  render(<Router />);
  expectNavInTheDocument();
  expect(screen.getByTestId("location-check")).toHaveValue("/");
});

test("navigate to page: 나의 요금제", async () => {
  MobilePlanList.givenApiMockOnMobilePlans();
  MobilePlanList.whenApiMockOnSubscribedPlan("empty");
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
