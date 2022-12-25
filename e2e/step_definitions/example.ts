import { Given, When, Then } from "@wdio/cucumber-framework";

import {
  givenAnAccountWithStartingBalance,
  deposit,
  accountBalanceShouldEqual,
} from "../support/check/examples";

Given(
  /시작 잔액이 (\d*)원인 은행 계좌가 주어질 때/,
  givenAnAccountWithStartingBalance
);

When(/(\d*)원을 입금한다면/, deposit);

Then(/해당 계좌의 잔액은 (\d*)원이 되어야 한다/, accountBalanceShouldEqual);
