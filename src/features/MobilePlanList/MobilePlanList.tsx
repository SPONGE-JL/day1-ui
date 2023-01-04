import React from "react";

import { useMobilePlans, useSubscrivedPlan } from "src/hooks/onApi";
import { MobilePlan } from "src/adapters/MobilePlanAPI/getMobilePlans";
import List from "src/components/List";

export default function MobilePlanList(): JSX.Element {
  const [mobilePlans] = useMobilePlans();
  const [subscribedPlan] = useSubscrivedPlan();

  const { subscribedPlanCode } = subscribedPlan;
  switch (subscribedPlanCode) {
    case undefined:
    case "":
    case "empty": {
      return (
        <div>
          <h2>어떤 요금제를 선택하시겠습니까?</h2>
          <List<MobilePlan>
            testId="subscriable-mobile-plan-list"
            iterableItems={mobilePlans}
            iterateCallback={RenderEachMobilePlan}
          />
        </div>
      );
    }
    default: {
      const selectedMobilePlan = [...mobilePlans].filter(
        (item: MobilePlan) => item.code === subscribedPlanCode
      );
      return (
        <div>
          <h2>현재 가입된 요금제 입니다.</h2>
          <List<MobilePlan>
            testId="subscribed-mobile-plan-list"
            iterableItems={selectedMobilePlan}
            iterateCallback={RenderEachMobilePlan}
          />
        </div>
      );
    }
  }
}

function RenderEachMobilePlan(mobilePlan: MobilePlan): JSX.Element {
  return (
    <span>
      <b>{mobilePlan.name}</b>
      <input type="hidden" name={mobilePlan.name} value={mobilePlan.code} />
    </span>
  );
}
