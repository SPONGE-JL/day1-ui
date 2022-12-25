/* eslint-disable no-console */
import url from "node:url";
import path from "node:path";

import { config as buildConfig } from "./wdio.conf";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

buildConfig.autoCompileOpts = {
  autoCompile: true,
  // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
  // for all available options
  tsNodeOpts: {
    transpileOnly: true,
    project: "./tsconfig.json",
  },
};

buildConfig.capabilities = [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: [
        "--disable-infobars",
        "--window-size=1280,800",
        "--headless",
        "--no-sandbox",
        "--disable-gpu",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    },
  },
];

buildConfig.hostname = "http://localhost";
buildConfig.port = 9516;
buildConfig.services = [
  [
    "chromedriver",
    {
      chromeDriverArgs: ["--port=9516", '--url-base="/"'],
    },
  ],
  [
    "static-server",
    {
      port: 3001,
      folders: [{ mount: "/", path: path.join(dirname, "../", "build") }],
    },
  ],
];
buildConfig.path = "/";

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (process.env.CI) {
  buildConfig.outputDir = path.join(dirname, "logs");
}

export const config = buildConfig;
