import React from "react";
import { render, screen } from "@testing-library/react";

import { List } from "./List";

const dummyItems = ["아이템 A", "아이템 B", "아이템 C", "아이템 D", "아이템 E"];

test("render List component correctly.", () => {
  render(<List iterableItems={dummyItems} />);
  expect(screen.getByText(/아이템 A/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 B/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 C/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 D/)).toBeInTheDocument();
  expect(screen.getByText(/아이템 E/)).toBeInTheDocument();
});
