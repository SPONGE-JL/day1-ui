import React from "react";

import MobilePlanAPI from "src/adapters/MobilePlanAPI";
import { render, screen } from "src/customRender";
import { MySubscriptionPlan } from "./MySubscriptionPlan";

function givenMockedResponseFromAPI(): void {
  jest.spyOn(MobilePlanAPI, "getSubscribedPlanBy").mockReturnValue({
    userId: 1,
    subscribedPlanCode: "empty",
  });
}

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});

test("render MySubscriptionPlan component correctly.", () => {
  givenMockedResponseFromAPI();
  render(<MySubscriptionPlan />);
  expect(screen.getByText(/📱 나의 요금제 정보/)).toBeInTheDocument();
});
