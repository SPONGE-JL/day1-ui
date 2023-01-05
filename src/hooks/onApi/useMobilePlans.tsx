import { useState, useCallback, useEffect } from "react";

import MobilePlanAPI, { MobilePlan } from "src/adapters/MobilePlanAPI";

export function useMobilePlans(userId: number): [MobilePlan[]] {
  const [mobilePlans, setMobilePlans] = useState<MobilePlan[]>([]);

  const fetch = useCallback(() => {
    const fetchedData = MobilePlanAPI.getMobilePlans();
    setMobilePlans(fetchedData);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [mobilePlans];
}
