import { useState, useCallback } from "react";

type PlanCodeProps = [string, (newPlanCode: string) => void];

export function usePlanCode(initPlanCode: string): PlanCodeProps {
  const [planCode, setPlanCode] = useState(initPlanCode);

  const updatePlanCode = useCallback(
    (newPlanCode: string) => {
      setPlanCode(newPlanCode);
    },
    [setPlanCode]
  );

  return [planCode, updatePlanCode];
}
