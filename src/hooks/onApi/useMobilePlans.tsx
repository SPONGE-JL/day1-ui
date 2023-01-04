import { useState, useCallback, useEffect } from "react";

import MobilePlanAPI, { MobilePlan } from "src/adapters/MobilePlanAPI";

type MobilePlansHook = [MobilePlan[], () => void];

export default function useMobilePlans(): MobilePlansHook {
  const [mobilePlans, setMobilePlans] = useState<MobilePlan[]>([]);

  const fetch = useCallback(() => {
    const fetchedData = MobilePlanAPI.getMobilePlans();
    setMobilePlans(fetchedData);
  }, []);

  useEffect(() => {
    fetch();
  });

  return [mobilePlans, fetch];
}
