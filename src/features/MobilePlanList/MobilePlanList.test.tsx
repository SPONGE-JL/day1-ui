import React from "react";

import MobilePlanAPI from "src/adapters/MobilePlanAPI";
import { render, screen } from "src/customRender";
import MobilePlanList from "./MobilePlanList";

beforeEach(() => {
  givenMockedMobilePlans();
});

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});

test("render MobilePlanList component correctly, when user has no subscription: empty", () => {
  whenMockedSubscribedPlan("empty");
  render(<MobilePlanList />);
  expect(
    screen.getByText(/어떤 요금제를 선택하시겠습니까?/)
  ).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제A/)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제B/)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제C/)).toBeInTheDocument();
});

test("render MobilePlanList component correctly, when user has a subscription: testModelA", () => {
  whenMockedSubscribedPlan("testModelB");
  render(<MobilePlanList />);
  expect(screen.getByText(/현재 가입된 요금제 입니다./)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제B/)).toBeInTheDocument();
});

export function givenMockedMobilePlans(): void {
  jest.spyOn(MobilePlanAPI, "getMobilePlans").mockImplementation(() => {
    return [
      { name: "테스트-요금제A", code: "testModelA" },
      { name: "테스트-요금제B", code: "testModelB" },
      { name: "테스트-요금제C", code: "testModelC" },
    ];
  });
}

export function whenMockedSubscribedPlan(subscribedPlanCode: string): void {
  jest
    .spyOn(MobilePlanAPI, "getSubscribedPlanBy")
    .mockImplementation((userId: number) => {
      return {
        userId,
        subscribedPlanCode,
      };
    });
}
