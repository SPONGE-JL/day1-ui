import getMobilePlans, { MobilePlan } from "./getMobilePlans";
import getSubscribedPlanBy, { SubscriptionPlan } from "./getSubscribedPlanBy";

const MobilePlanAPI = {
  getMobilePlans,
  getSubscribedPlanBy,
};

export default MobilePlanAPI;

export type { MobilePlan, SubscriptionPlan };
