import type { Selector } from "webdriverio";

/**
 * Check is visable state the 'subscribable mobile plan list'
 */
async function subscribableMobilePlanList(): Promise<void> {
  const elem = await $("ul[data-testid='subscriable-mobile-plan-list']" as Selector);
  await elem.waitForDisplayed();

  const text = await elem.getText();
  printState("Pared text from browser", text);

  const cachedMobilePlanList = text.split("\n");
  printState("Splited to list for testing", cachedMobilePlanList);
}

/**
 * Print out on debug level
 * @param {String} message Message on log
 * @param {String} str Target to log
 */
function printState(message: string, str: string | string[]): void {
  const indent = "\n\t";
  console.debug(`${indent}[DEBUG] ${message}${JSON.stringify(str)}`);
}

const isVisable = {
  subscribableMobilePlanList,
};

export default isVisable;
