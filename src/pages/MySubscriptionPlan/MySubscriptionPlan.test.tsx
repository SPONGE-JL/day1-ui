import React from "react";

import * as MobilePlanList from "src/features/MobilePlanList/MobilePlanList.test";
import { render, screen } from "src/customRender";
import { MySubscriptionPlan } from "./MySubscriptionPlan";

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});

test("render MySubscriptionPlan component correctly.", () => {
  MobilePlanList.givenApiMockOnMobilePlans();
  MobilePlanList.whenApiMockOnSubscribedPlan("empty");
  render(<MySubscriptionPlan />);
  expect(screen.getByText(/📱 나의 요금제 정보/)).toBeInTheDocument();
});
