/**
 * Open Web Browser with moving to target page
 * @param  {String}  pageName Target page name to make readeable sentence
 * @param  {String}  pagePath Target page path to use on WebDriverIO
 * @param  {"site" | "url"}  type Select to set baseUrl prefix
 */
async function toAccessWebPage(pageName: string, pagePath: string, type: "site" | "url"): Promise<void> {
  const webPageUrl = (type === "site") ? `${browser.options.baseUrl}${pagePath}` : pagePath;
  await browser.url(webPageUrl);
  printState(webPageUrl);
}

/**
 * Print out on debug level
 * @param {String} webPageUrl Web page url for log
 */
function printState(webPageUrl: string): void {
  const indent = "\n\t";
  const message = "[DEBUG] Browser has moved at ";
  console.debug(`${indent}${message}'${webPageUrl}'`);
}

const openWebBrowser = {
  toAccessWebPage,
};

export default openWebBrowser;
