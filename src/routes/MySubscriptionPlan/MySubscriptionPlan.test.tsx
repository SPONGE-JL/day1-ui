import React from "react";
import { render, screen } from "@testing-library/react";

import { MySubscriptionPlan } from "./MySubscriptionPlan";

test("render MySubscriptionPlan component correctly.", () => {
  givenMockedChildren();
  render(<MySubscriptionPlan />);
  expect(screen.getByText(/📱 나의 요금제 정보/)).toBeInTheDocument();
});

function givenMockedChildren(): void {
  jest.doMock("features/SubscribableMobilePlanList", (): JSX.Element => {
    const List = React.lazy(async () => await import("components/List"));
    return (
      <div>
        <h2>테스트 요금제 목록</h2>
        <List iterableItems={["요금제1", "요금제2", "요금제3"]} />
      </div>
    );
  });
}
