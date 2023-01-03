import React, { useState, useEffect, useCallback } from "react";

import MobilePlanAPI, { MobilePlan } from "src/adapters/MobilePlanAPI";
import List from "src/components/List";

interface MobilePlanListProps {
  planCode: string;
}

export default function MobilePlanList({
  planCode,
}: MobilePlanListProps): JSX.Element {
  const [mobilePlans, setMobilePlans] = useState<MobilePlan[]>([]);

  useEffect(() => {
    const servedMobilePlans: MobilePlan[] = MobilePlanAPI.getMobilePlans();
    setMobilePlans(servedMobilePlans);
  }, [setMobilePlans]);

  const renderEachMobilePlan = useCallback(
    (mobilePlan: MobilePlan): JSX.Element => (
      <span>
        {mobilePlan.name}
        <input type="hidden" name={mobilePlan.name} value={mobilePlan.code} />
      </span>
    ),
    []
  );

  switch (planCode) {
    case "empty":
      return (
        <div>
          <h2>어떤 요금제를 선택하시겠습니까?</h2>
          <List<MobilePlan>
            testId="subscriable-mobile-plan-list"
            iterableItems={mobilePlans}
            iterateCallback={renderEachMobilePlan}
          />
        </div>
      );
  }
  return (
    <div>
      <h2>현재 가입된 요금제 입니다.</h2>
      <List<MobilePlan>
        testId="subscribed-mobile-plan-list"
        iterableItems={mobilePlans.filter(
          (item: MobilePlan) => item.code === planCode
        )}
        iterateCallback={renderEachMobilePlan}
      />
    </div>
  );
}
