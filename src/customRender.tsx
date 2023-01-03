/* eslint-disable import/export */
// Ref. > https://testing-library.com/docs/react-testing-library/setup/
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { RecoilRoot } from "recoil";

const WrappedProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const customRender = (
  ui: JSX.Element,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: WrappedProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
