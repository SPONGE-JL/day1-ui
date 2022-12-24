import React from "react";
import { render, screen } from "@testing-library/react";

import { SubscribableMobilePlanList } from "./SubscribableMobilePlanList";
import MobilePlansAPI from "api/MobilePlansAPI";

test("render MobilePlanList component correctly.", () => {
  givenMockedAPI();
  render(<SubscribableMobilePlanList />);
  expect(
    screen.getByText(/어떤 요금제를 선택하시겠습니까?/)
  ).toBeInTheDocument();
  expect(screen.getByText(/테스트_요금제1/)).toBeInTheDocument();
  expect(screen.getByText(/테스트_요금제2/)).toBeInTheDocument();
  expect(screen.getByText(/테스트_요금제3/)).toBeInTheDocument();
});

function givenMockedAPI(): void {
  jest
    .spyOn(MobilePlansAPI, "getMobilePlans")
    .mockReturnValue(["테스트_요금제1", "테스트_요금제2", "테스트_요금제3"]);
}

afterEach(() => {
  jest.restoreAllMocks(); // restore the spy created with spyOn
});
