import { Given } from "@cucumber/cucumber";

import presentServiceUser from "../support/domain/presentServiceUser.js";

Given(
  /^"(\d*)"번 사용자가 어떠한 요금제에도 가입되어 있지 않을 때,$/,
  presentServiceUser.hasNoSubscriptionPlan
);
