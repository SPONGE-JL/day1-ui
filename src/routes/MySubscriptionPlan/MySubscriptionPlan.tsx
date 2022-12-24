import React from "react";

import SubscribableMobilePlanList from "features/SubscribableMobilePlanList";

export function MySubscriptionPlan(): JSX.Element {
  return (
    <section>
      <h1>📱 나의 요금제 정보</h1>
      <SubscribableMobilePlanList />
    </section>
  );
}
