import React from "react";

import MobilePlanAPI from "src/adapters/MobilePlanAPI";
import { render, screen } from "src/customRender";
import MobilePlanList from "./MobilePlanList";

export function givenApiMockOnMobilePlans(): void {
  jest.spyOn(MobilePlanAPI, "getMobilePlans").mockImplementation(() => [
    { name: "테스트-요금제A", code: "testModelA" },
    { name: "테스트-요금제B", code: "testModelB" },
    { name: "테스트-요금제C", code: "testModelC" },
  ]);
}

export function whenApiMockOnSubscribedPlan(subscribedPlanCode: string): void {
  jest
    .spyOn(MobilePlanAPI, "getSubscribedPlanBy")
    .mockImplementation(() => ({ userId: 1, subscribedPlanCode }));
}

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});

test("render MobilePlanList component correctly, when user has no subscription: empty", () => {
  givenApiMockOnMobilePlans();
  whenApiMockOnSubscribedPlan("empty");
  render(<MobilePlanList />);
  expect(
    screen.getByText(/어떤 요금제를 선택하시겠습니까?/)
  ).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제A/)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제B/)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제C/)).toBeInTheDocument();
});

test("render MobilePlanList component correctly, when user has a subscription: testModelA", () => {
  givenApiMockOnMobilePlans();
  whenApiMockOnSubscribedPlan("testModelB");
  render(<MobilePlanList />);
  expect(screen.getByText(/현재 가입된 요금제 입니다./)).toBeInTheDocument();
  expect(screen.getByText(/테스트-요금제B/)).toBeInTheDocument();
});
