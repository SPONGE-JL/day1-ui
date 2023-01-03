import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { userAtom } from "src/stores/user";
import { usePlanCode } from "src/hooks/usePlanCode";
import MobilePlanAPI from "src/adapters/MobilePlanAPI";
import MobilePlanList from "src/features/MobilePlanList/MobilePlanList";

export function MySubscriptionPlan(): JSX.Element {
  const { userId } = useRecoilValue(userAtom);
  const [planCode, updatePlanCode] = usePlanCode("");

  useEffect(() => {
    const { subscribedPlanCode } = MobilePlanAPI.getSubscribedPlanBy(userId);
    updatePlanCode(subscribedPlanCode);
  }, [userId, updatePlanCode]);

  return (
    <section>
      <h1>📱 나의 요금제 정보</h1>
      {render(planCode)}
    </section>
  );
}

function render(planCode: string): JSX.Element {
  if (planCode === "") {
    return <h2>불러 오는 중..⌛</h2>;
  }
  return <MobilePlanList planCode={planCode} />;
}
