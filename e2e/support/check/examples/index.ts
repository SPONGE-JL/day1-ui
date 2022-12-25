import { assert } from "chai";

let accountBalance = 0;

export async function givenAnAccountWithStartingBalance(
  amount: number
): Promise<void> {
  accountBalance = Number(amount);
}

export async function deposit(amount: number): Promise<void> {
  accountBalance += Number(amount);
}

export async function accountBalanceShouldEqual(
  expectedAmount: number,
  amount: number
): Promise<void> {
  assert.equal(expectedAmount, accountBalance);
}
