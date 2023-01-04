import React from "react";

import MobilePlanList from "src/features/MobilePlanList";

export function MySubscriptionPlan(): JSX.Element {
  return (
    <section>
      <h1>📱 나의 요금제 정보</h1>
      <MobilePlanList />
    </section>
  );
}
