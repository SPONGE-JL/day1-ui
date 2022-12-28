import { Then } from "@cucumber/cucumber";

import isVisible from "../support/check/isVisable.js";

Then(
  /^통신사에서 제공하는 요금제를 확인할 수 있다.$/,
  isVisible.subscribableMobilePlanList
);
