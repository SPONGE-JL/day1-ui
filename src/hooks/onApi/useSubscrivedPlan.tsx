import { useState, useCallback, useEffect } from "react";

import MobilePlanAPI, { SubscriptionPlan } from "src/adapters/MobilePlanAPI";

export function useSubscrivedPlan(userId: number): [SubscriptionPlan] {
  const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan>({
    userId,
    subscribedPlanCode: "empty",
  });

  const fetch = useCallback(() => {
    const fetchedData = MobilePlanAPI.getSubscribedPlanBy(userId);
    setSubscriptionPlan(fetchedData);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [subscriptionPlan];
}
