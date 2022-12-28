import { When } from "@cucumber/cucumber";

import openWebBrowser from "../support/action/openWebBrowser.js";

When(
  /^"(.*)" 페이지를 보기 위해 "(.*)" 경로로 (site|url)에 접근한다면,$/,
  openWebBrowser.toAccessWebPage
);
