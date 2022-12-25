import {
  givenAnAccountWithStartingBalance,
  deposit,
  accountBalanceShouldEqual,
} from "./index";

describe("example", () => {
  it("accountBalanceShouldEqual", () => {
    givenAnAccountWithStartingBalance(1000);
    deposit(2000);
    accountBalanceShouldEqual(3000, 3000);
  });
});
