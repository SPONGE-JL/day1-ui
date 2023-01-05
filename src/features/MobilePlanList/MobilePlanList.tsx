import React from "react";
import { useRecoilValue } from "recoil";

import { userAtom } from "src/stores/user";
import { useMobilePlans, useSubscrivedPlan } from "src/hooks/onApi";
import { MobilePlan } from "src/adapters/MobilePlanAPI/getMobilePlans";
import List from "src/components/List";

export default function MobilePlanList(): JSX.Element {
  const { userId } = useRecoilValue(userAtom);
  const [mobilePlans] = useMobilePlans(userId);
  const [subscribedPlan] = useSubscrivedPlan(userId);

  if (mobilePlans.length === 0) {
    return <></>;
  }

  const { subscribedPlanCode } = subscribedPlan;
  if (subscribedPlanCode === "empty") {
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

  const selectedMobilePlan = [...mobilePlans].filter(
    (item: MobilePlan) => item.code === subscribedPlanCode
  );
  return (
    <div>
      <h2>현재 가입된 요금제 입니다.</h2>
      <List<MobilePlan>
        testId="subscribed-mobile-plan"
        iterableItems={selectedMobilePlan}
        iterateCallback={RenderEachMobilePlan}
      />
    </div>
  );
}

function RenderEachMobilePlan(mobilePlan: MobilePlan): JSX.Element {
  return (
    <span>
      <b>{mobilePlan.name}</b>
      <input type="hidden" name={mobilePlan.name} value={mobilePlan.code} />
    </span>
  );
}
