import getMobilePlans, { MobilePlan } from "./getMobilePlans";
import getSubscribedPlanBy from "./getSubscribedPlanBy";

export type { MobilePlan };

const MobilePlanAPI = {
  getMobilePlans,
  getSubscribedPlanBy,
};

export default MobilePlanAPI;
