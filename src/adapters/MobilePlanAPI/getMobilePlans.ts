export interface MobilePlan {
  name: string;
  code: string;
}

// TODO: GET /mobile-plans
export default function getMobilePlans(): MobilePlan[] {
  return [
    { name: "요금제A", code: "modelA" },
    { name: "요금제B", code: "modelB" },
    { name: "요금제C", code: "modelC" },
  ];
}
