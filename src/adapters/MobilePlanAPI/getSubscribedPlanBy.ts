export interface SubscriptionPlan {
  userId: number;
  subscribedPlanCode: string;
}

// TODO: GET /subscription-plans/users/${userId}
export default function getSubscribedPlanBy(userId: number): SubscriptionPlan {
  return {
    userId,
    subscribedPlanCode: "empty",
    // subscribedPlanCode: "modelA",
  };
}
