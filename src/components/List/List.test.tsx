import React from "react";

import { render, screen } from "src/customRender";
import List from "./List";

test("render List component correctly.", () => {
  render(
    <List
      testId="dummy-item-list"
      iterableItems={[
        "아이템 A",
        "아이템 B",
        "아이템 C",
        "아이템 D",
        "아이템 E",
      ]}
      iterateCallback={(item: string): JSX.Element => <span>{item}</span>}
    />
  );
  expect(screen.getByTestId("dummy-item-list")).toBeInTheDocument();
  expect(screen.getByText(/아이템 A/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 B/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 C/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 D/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 E/)).toBeInTheDocument();
});

test("render List component correctly, when empty.", () => {
  render(
    <List
      testId="empty-item-list"
      iterableItems={[]}
      iterateCallback={(item: string): JSX.Element => <span>{item}</span>}
    />
  );

  const element = screen.getByTestId("empty-item-list");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("value", "iterableItems-is-empty");
});
