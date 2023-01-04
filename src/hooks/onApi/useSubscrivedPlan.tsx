import { useRecoilValue } from "recoil";
import { useState, useCallback, useEffect } from "react";

import { userAtom } from "src/stores/user";
import MobilePlanAPI, { SubscriptionPlan } from "src/adapters/MobilePlanAPI";

type SubscriptionPlanHook = [SubscriptionPlan, () => void];

export default function useSubscrivedPlan(): SubscriptionPlanHook {
  const { userId } = useRecoilValue(userAtom);
  const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan>({
    userId,
    subscribedPlanCode: "empty",
  });

  const fetch = useCallback(() => {
    const fetchedData = MobilePlanAPI.getSubscribedPlanBy(userId);
    setSubscriptionPlan(fetchedData);
  }, [userId]);

  useEffect(() => {
    fetch();
  });

  return [subscriptionPlan, fetch];
}
