import React, { useEffect, useState } from "react";

import MobilePlansAPI from "api/MobilePlansAPI";
import List from "components/List";

export function SubscribableMobilePlanList(): JSX.Element {
  const [mobilePlans, setMobilePlans] = useState([""]);
  useEffect(() => {
    setMobilePlans(MobilePlansAPI.getMobilePlans());
  }, []);
  return (
    <div>
      <h2>어떤 요금제를 선택하시겠습니까?</h2>
      <List testId="subscriable-mobile-plan-list" iterableItems={mobilePlans} />
    </div>
  );
}
