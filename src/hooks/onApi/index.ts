import useMobilePlans from "./useMobilePlans";
import useSubscrivedPlan from "./useSubscrivedPlan";

export { useMobilePlans, useSubscrivedPlan };

// ! export only to use on test at 'spyOn' part
const onApi = {
  useMobilePlans,
  useSubscrivedPlan,
};

export default onApi;
